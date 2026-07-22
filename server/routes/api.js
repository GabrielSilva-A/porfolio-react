const express = require('express');
const { getPortfolio, submitContact } = require('../controllers/portfolioController');

const router = express.Router();

router.get('/portfolio', getPortfolio);
router.post('/contact', submitContact);

module.exports = router;
