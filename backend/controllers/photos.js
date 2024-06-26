const prisma = require('../prisma/prismaClient.js');

const index = async ( req, res, next ) => {
    try{
        const photos = await prisma.photo.findMany();
        return res.json({
            photos,
        });
    }catch(err){
        next(err);
    }
    
}

module.exports = {
    index,
}