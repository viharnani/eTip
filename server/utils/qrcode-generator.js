const QRCode = require('qrcode');

exports.generateQRCode = async (data) => {
  try {
    const qrcodeData = await QRCode.toDataURL(data);
    return qrcodeData;
  } catch (error) {
    throw new Error('Error generating QR code');
  }
};