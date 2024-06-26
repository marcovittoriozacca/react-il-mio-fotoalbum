const prisma = require("../prisma/prismaClient.js");

const registerBody = {
    email:{
        in: ["body"],
        notEmpty:{
            errorMessage: "Please provide an email",
            bail: true,
        },
        isEmail:{
            errorMessage: "Please provide a valid email",
            bail: true,
        },
        custom:{
            options: async (email) => {
                try{
                    const checkEmail = await prisma.user.findUnique({
                        where: {email}
                    });
                    if(checkEmail) throw new Error ("This email is already linked to an existing account");
                    return true
                }catch(err){
                    throw err;
                }
            }
        }
    },
    password:{
        in:["body"],
        notEmpty:{
            errorMessage: "Please provide a password",
            bail: true,
        },
        isLenght:{
            options:{min:8},
            errorMessage: "The password must be at least 8 characters long",
            bail: true,
        },
        isStrongPassword:{
            options:{
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1,
            },
            errorMessage: "The password should be at least 8 characters long, should contain at least 1 uppercase character, 1 lowercase character and one symbol",
        }
    },
    username: {
        in:["body"],
        isString:{
            errorMessage: "The username must be a string"
        },
        optional: true,
        toString: true,
    }

}

module.exports = {
    registerBody,
};