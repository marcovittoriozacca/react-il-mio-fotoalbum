//npm pckgs
const express = require("express");

//variables
const { index } = require('../controllers/photos.js');

//router declaration
const router = express.Router();

//routes
router.get('/', index);

//router export
module.exports = router;