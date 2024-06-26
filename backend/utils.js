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
module.exports = {
    makeSlug,
    hashPassword
};