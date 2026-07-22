const express = require('express');
const path = require('path');
const portfolioData = require('./data/portfolioData');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Completa los campos obligatorios.' });
  }

  console.log('📧 Nuevo mensaje de contacto');
  console.log({ name, email, subject, message });

  res.json({ success: true, message: 'Mensaje recibido correctamente.' });
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`🚀 Servidor Express corriendo en http://localhost:${port}`);
});
