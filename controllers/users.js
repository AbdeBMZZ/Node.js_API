const User = require('../models/User');
const mongoose = require('mongoose');

const addUser = async (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      res.status(404).json({ message: 'cannot find the user' });
    } else res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
};
