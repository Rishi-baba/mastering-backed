const express = require('express');
const { handleUserSignup } = require('../Controller/userController.js');
const router = express.Router();

router.post('/', handleUserSignup)

module.exports = router;