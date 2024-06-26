//npm pckgs
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//variables
const { HOST } = process.env || 'localhost';
const { PORT } = process.env || 3000;

//middlewares
const errorHandler = require('./middlewares/errorHandler.js');

//photos router
const photos = require("./routers/photos.js");
const auth = require('./routers/auth.js');

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

app.use('/photos', photos); //photos routes and sub-routes

app.use('/auth', auth); //auth routes


app.use(errorHandler);

//server listener
app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});


