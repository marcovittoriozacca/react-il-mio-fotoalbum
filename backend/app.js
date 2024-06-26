//npm pckgs
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");

//variables
const { HOST } = process.env || 'localhost';
const { PORT } = process.env || 3000;

//photos router
const photos = require("./routers/photos.js");

//app declaration
const app = express();



//routes
app.get('/', (req, res) => {
    res.json({
        error: 'Invalid Page',
    });
});

app.use('/photos', photos);



//server listener
app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});


