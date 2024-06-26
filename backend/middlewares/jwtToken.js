const jwt = require("jsonwebtoken");
require('dotenv').config();

function generateToken(user) {

    const payload = {
    id: user.id,
    email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" });
}

module.exports = {
    generateToken,
}