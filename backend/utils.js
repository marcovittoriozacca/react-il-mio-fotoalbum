const slugify = require('slugify');

const makeSlug = (string) => {
    return slugify(string,{
        replacement: '-',
        lower: true,
        trim: true
    });
}

module.exports = {
    makeSlug,
};