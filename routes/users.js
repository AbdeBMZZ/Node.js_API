const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const newUser = await user.save();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (user == null) {
      res.status(404).json({ message: 'cannot find the user' });
    } else res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
