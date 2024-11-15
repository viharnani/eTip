const express = require('express');
const router = express.Router();
const tippingController = require('../controllers/tippingController');

router.post('/', tippingController.createTip);
router.get('/', tippingController.getTips);

module.exports = router;