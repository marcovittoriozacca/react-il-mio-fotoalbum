//npm pckgs
const express = require("express");
const multer = require("multer");
const path = require("path");

//variables
const { index, show, create } = require('../controllers/photos.js');

//middlewares
const validator = require('../middlewares/validator.js');

//validation schemas
const { photoBody } = require('../validations/photos_schema.js');

//router declaration
const router = express.Router();

//multer storage and upload declaration
const storage = multer.diskStorage({
    destination: "public/photos_images",
    filename: (req, file, cf) => {
        const fileType = path.extname(file.originalname);
        cf(null, String(Date.now()) + fileType)
    }
});
const upload = multer({storage});

//routes
router.get('/', index); //index
router.get('/:slug', show); //show
router.post('/', [upload.single("image"), validator(photoBody)], create); //create
//router export
module.exports = router;