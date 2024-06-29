const express = require('express');
const router = express.Router();
const validator = require('../middlewares/validator.js');
const contactBody = require('../validations/contact_schema.js');
const { contact, getAllContacts} = require('../controllers/contact.js');
const { authenticateWithJWT } = require('../middlewares/jwtToken.js');


router.post('/', [express.json(), validator(contactBody)], contact);

router.get('/', authenticateWithJWT, getAllContacts);

module.exports = router;