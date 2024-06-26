//npm pckgs
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");

//variables
const { HOST } = process.env || 'localhost';
const { PORT } = process.env || 3000;


const app = express();

app.get('/', (req, res) => {
    res.end("Starting Point");
});


app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});


