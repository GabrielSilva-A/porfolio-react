const portfolioData = require('../data/portfolioData');

function getPortfolio(_req, res) {
  res.json(portfolioData);
}

function submitContact(req, res) {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Completa los campos obligatorios.' });
  }

  console.log('📧 Nuevo mensaje de contacto');
  console.log({ name, email, subject, message });

  return res.json({ success: true, message: 'Mensaje recibido correctamente.' });
}

module.exports = {
  getPortfolio,
  submitContact
};
