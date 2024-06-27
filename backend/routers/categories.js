const express = require('express');
const { authenticateWithJWT } = require('../middlewares/jwtToken.js');
const { index, create, destroy } = require('../controllers/categories.js');
const validator = require('../middlewares/validator.js');
const { categoryBody } = require('../validations/categories_schema.js');

const router = express.Router();

router.use(authenticateWithJWT);

router.get('/', index); //index
router.delete('/:slug', destroy); //delete
router.use(express.json());
router.post('/', validator(categoryBody), create); //create

module.exports = router