const mongoose = require('mongoose');

const qrcodeSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  qrcodeData: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('QRCode', qrcodeSchema);