const prisma = require('../prisma/prismaClient.js');

const contact = async ( req, res, next ) => {
    const { email, message } = req.body;

    const data = {
        email,
        message,
    }

    try{
        const newContact = await prisma.contact.create({data})
        res.json({
            success: true,
        })
    }catch(err){
        return next(err);
    }
}

const getAllContacts = async ( req, res, next ) => {
    try{
        const contacts = await prisma.contact.findMany({
            select:{
                email: true,
                message: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.json({
            contacts
        })
    }catch(err){
        console.error(err);
    }
}


module.exports = {
    contact,
    getAllContacts
};