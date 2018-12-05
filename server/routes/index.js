const express = require('express');
const router = express.Router();
const models = require('../models').modelos;

router.use('/', require('./user'));


module.exports = router;
