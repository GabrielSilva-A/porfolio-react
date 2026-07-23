const portfolioData = require('../data/portfolioData');
const { sendContactEmail } = require('../services/contactMailer');

function getPortfolio(_req, res) {
  res.json(portfolioData);
}

async function submitContact(req, res) {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Completa los campos obligatorios.' });
  }

  try {
    await sendContactEmail({ name, email, subject, message });
    return res.json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Email delivery error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'No se pudo enviar el mensaje en este momento. Intenta nuevamente.'
    });
  }
}

module.exports = {
  getPortfolio,
  submitContact
};
