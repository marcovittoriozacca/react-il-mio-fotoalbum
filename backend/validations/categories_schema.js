const prisma = require('../prisma/prismaClient.js');

const categoryBody = {
    name: {
        in: ["body"],
        notEmpty:{
            errorMessage: "Name is a required field",
        },
        toString: true,
        custom: {
            options: async (name) => {
                try{
                    const allCategories = await prisma.category.findFirst({
                        where: {name},
                    });
    
                    if(allCategories){
                        throw new Error ("A category with that name already exist");
                    }
                    return true
    
                }catch(err){
                    throw err;
                }
            }
        }
    },
}

module.exports = {
    categoryBody,
}