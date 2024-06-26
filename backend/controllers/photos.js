const prisma = require('../prisma/prismaClient.js');
const { makeSlug } = require('../utils.js');

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
    const {title, description, visible} = req.body;
    const { sanitizedCategories } = req
    const { filename } = req.file;

    const image = `photos_images/${filename}`;

    //unique slug
    
    let slug = makeSlug(title);
    try{
        let allSlugs = await prisma.photo.findMany({
            select: {
                slug: true,
            }
        });
        allSlugs = allSlugs.map(e => e.slug);

        let baseSlug = slug;
        let counter = 1;
        while(allSlugs.includes(slug)){
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
    }catch(err){
        return next(err);
    }

    //new photo data
    const newPhoto = {
        title,
        slug,
        description,
        visible,
        image,
        categories:{
            connect: sanitizedCategories,
        }
    }

    //post api call to create a new photo inside our database
    try{
        const photo = await prisma.photo.create({
            data: newPhoto,
        })
        return res.json({
            photo,
        });
    }catch(err){
        return next(err);
    }
};

module.exports = {
    index,
    show,
    create,
};