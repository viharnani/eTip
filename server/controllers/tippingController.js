const Tip = require('../models/Tip');

exports.createTip = async (req, res) => {
  try {
    const { tip, comment } = req.body;
    const newTip = await Tip.create({ tip, comment });
    res.status(201).json(newTip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTips = async (req, res) => {
  try {
    const tips = await Tip.find();
    res.status(200).json(tips);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};