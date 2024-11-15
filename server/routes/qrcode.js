const express = require('express');
const router = express.Router();
const qrcodeController = require('../controllers/qrcodeController');

router.post('/', qrcodeController.generateQRCode);
router.get('/', qrcodeController.getQRCodes);

module.exports = router;