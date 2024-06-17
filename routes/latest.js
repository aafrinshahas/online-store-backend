const express = require('express');
const { getLatestProducts } = require('../controllers/latestProductController');

const router = express.Router();

router.route('/latestproduct').get(getLatestProducts)

module.exports = router;