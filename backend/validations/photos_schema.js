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
        isArray:{
            errorMessage: "Category is an array and only accepts integer values",
        },
        isLength:{
            options: {min: 1},
            errorMessage: "You must include at least one category",
        },
        custom:{
            options: async (values) => {
                const ids = values.map(id => parseInt(id));
                const checkIds = ids.find(i => isNaN(parseInt(i)));
                if(checkIds) throw new Error;
                let categories = [];
                try{
                    categories = await prisma.category.findMany({
                        where: {
                            id: {in: ids},
                        },
                    });
                }catch(err){
                    throw new Error ("One or more ID are not integers");
                }
                if(categories.length < values.length) throw new Error("One or more ID are not present in the Database");

                return true;
            }
        }
    }
}

module.exports = {
    photoBody,
}