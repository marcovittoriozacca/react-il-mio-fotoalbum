const slugify = require('slugify');
const bcrypt = require('bcrypt');
require("dotenv").config;

const makeSlug = (string) => {
    return slugify(string,{
        replacement: '-',
        lower: true,
        trim: true
    });
}

const hashPassword = async password => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

const comparePassword = async ( password, hashedPassword ) => {
    const match = await bcrypt.compare( password + process.env.PEPPER_KEY, hashedPassword );
    return match;
}
module.exports = {
    makeSlug,
    hashPassword,
    comparePassword
};