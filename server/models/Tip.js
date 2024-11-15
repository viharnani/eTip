const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  tip: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tip', tipSchema);