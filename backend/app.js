//npm pckgs
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//variables
const { HOST } = process.env || 'localhost';
const { PORT } = process.env || 3000;

//photos router
const photos = require("./routers/photos.js");

//app declaration
const app = express();

//exposing the public folder
app.use(express.static("public"))

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


