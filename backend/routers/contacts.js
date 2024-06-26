const express = require('express');
const router = express.Router();
const validator = require('../middlewares/validator.js');
const contactBody = require('../validations/contact_schema.js');
const contact = require('../controllers/contact.js');


router.post('/', [express.json(), validator(contactBody)], contact);

module.exports = router;