const prisma = require('../prisma/prismaClient.js');

//index controller CRUD for READ (all or filtered records)
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

//show controller CRUD for READ (single record)
const show = async ( req, res, next ) => {
    const { slug } = req.params;

    try{
        const photo = prisma.photo.findUnique({
            where:{slug}
        })
        return res.json({
            photo,
        });

    }catch(err){
        next(err);
    }
}

//create controller CRUD for CREATE
const create = async ( req, res, next ) => {
    const {title, description, visible, categories} = req.body;
    const { path } = req.file;

    const photo = {
        title,
        description,
        visible,
        image: path,
        categories:{
            connect: categories.map(c => ({id: parseInt(c)})),
        }
    }
    
    res.json({
        photo,
    });
};

module.exports = {
    index,
    show,
    create,
};