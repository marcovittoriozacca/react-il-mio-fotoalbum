require('dotenv').config();
const { hashPassword } = require('../utils.js');

const register = async ( req, res, next ) => {
    const { email, password, username } = req.body;

    const hashedPassword = await hashPassword(password + process.env.PEPPER_KEY);
    
    const newUser = {
        email,
        password,
        username: username || 'User',
    }
    
    console.log(newUser);
}

module.exports = {
    register,
}