const QRCode = require('../models/QRCode');
const qrcode = require('qrcode');

exports.generateQRCode = async (req, res) => {
  try {
    const { data } = req.body;
    const qrcodeData = await qrcode.toDataURL(data);
    const newQRCode = await QRCode.create({ data, qrcodeData });
    res.status(201).json(newQRCode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getQRCodes = async (req, res) => {
  try {
    const qrcodes = await QRCode.find();
    res.status(200).json(qrcodes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};