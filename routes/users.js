const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { addUser, getAllUsers, getUser } = require('../controllers/users');

router.get('/', getAllUsers);

router.post('/', addUser);

router.get('/:id', getUser);

module.exports = router;
