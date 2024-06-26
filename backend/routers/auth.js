const express = require('express');
const multer = require('multer');
const auth = require('../controllers/auth.js');
const path = require('path');

const router = express.Router();


const validator = require('../middlewares/validator.js');
const authSchema = require('../validations/auth_schema.js');

//multer storage and upload declaration
const storage = multer.diskStorage({
    destination: "public/users_images",
    filename: (req, file, cf) => {
        const fileType = path.extname(file.originalname);
        cf(null, String(Date.now()) + fileType)
    }
});
const upload = multer({storage});

router.post('/register', [upload.single("image"), validator(authSchema.registerBody)], auth.register);


module.exports = router