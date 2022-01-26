const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
