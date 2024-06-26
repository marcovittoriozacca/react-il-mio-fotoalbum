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

module.exports = contact;