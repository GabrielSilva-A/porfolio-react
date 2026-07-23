const nodemailer = require('nodemailer');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseSecureValue(value) {
  if (!value) {
    return false;
  }

  const normalized = String(value).trim().toLowerCase();
  return normalized === 'true' || normalized === '1';
}

function getMailerConfig() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL
  } = process.env;

  const missingVars = [];

  if (!SMTP_HOST) missingVars.push('SMTP_HOST');
  if (!SMTP_PORT) missingVars.push('SMTP_PORT');
  if (!SMTP_USER) missingVars.push('SMTP_USER');
  if (!SMTP_PASS) missingVars.push('SMTP_PASS');
  if (!CONTACT_TO_EMAIL) missingVars.push('CONTACT_TO_EMAIL');

  if (missingVars.length > 0) {
    throw new Error(`Missing required email environment variables: ${missingVars.join(', ')}`);
  }

  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: parseSecureValue(SMTP_SECURE),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    },
    toEmail: CONTACT_TO_EMAIL,
    fromEmail: CONTACT_FROM_EMAIL || SMTP_USER
  };
}

let transporter;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const config = getMailerConfig();

  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth
  });

  return transporter;
}

async function sendContactEmail({ name, email, subject, message }) {
  const config = getMailerConfig();
  const smtpTransporter = getTransporter();

  const safeSubject = subject && subject.trim() ? subject.trim() : 'Sin asunto';
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubjectHtml = escapeHtml(safeSubject);
  const safeMessageHtml = escapeHtml(message).replace(/\n/g, '<br>');

  const html = `
    <h2>Nuevo mensaje desde tu portfolio</h2>
    <p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Asunto:</strong> ${safeSubjectHtml}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${safeMessageHtml}</p>
  `;

  const text = [
    'Nuevo mensaje desde tu portfolio',
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Asunto: ${safeSubject}`,
    '',
    'Mensaje:',
    message
  ].join('\n');

  await smtpTransporter.sendMail({
    from: config.fromEmail,
    to: config.toEmail,
    replyTo: email,
    subject: `[Portfolio] ${safeSubject}`,
    text,
    html
  });
}

module.exports = {
  sendContactEmail
};
