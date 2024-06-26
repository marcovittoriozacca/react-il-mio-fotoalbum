const contactBody = {
    email:{
        notEmpty:{
            errorMessage: "You must provide an email",
            bail: true,
        },
        isEmail:{
            errorMessage: "Please provide a valid email",
        },
    },
    message:{
        notEmpty:{
            errorMessage: "The message cant be empty",
            bail: true,
        },
        toString: true,
    }
}

module.exports = contactBody;