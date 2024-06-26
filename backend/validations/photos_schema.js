const prisma = require("../prisma/prismaClient.js");

const photoBody = {
    title: {
        in: ["body"],
        notEmpty:{
            errorMessage: "Title is a required field.",
        },
        isString:{
            errorMessage: "Title must be a String.",
        },
        isLength:{
            options: {min: 1},
            errorMessage: "Title too short, write at least 1 character.",
        },
        isLength:{
            options: {max: 100},
            errorMessage: "Title too long, max 100 characters.",
        },
        toString: true,
    },
    description: {
        in: ["body"],
        isString: {
            errorMessage: "Description must be a String.",
        },
        isLength:{
            options: {max: 255},
            errorMessage: "This Description is too long, max 255 characters.",
        },
        optional: true,
        toString: true,
    },
    visible: {
        in: ["body"],
        notEmpty:{
            errorMessage: "Choose the visibility for this photo: (true / false)",
        },
        isBoolean: {
            errorMessage: "Visible only accepts Boolean values (true / false)",
        },
        toBoolean: true,
    },
    categories: {
        in: ["body"],
        notEmpty:{
            errorMessage: "Category is a required field",
        },
        isLength:{
            options: {min: 1},
            errorMessage: "You must include at least one category",
        },
        //custo validation to check if the given category exists is yet to be added
    }
}

module.exports = {
    photoBody,
}