const prisma = require('../prisma/prismaClient.js');
const { makeSlug } = require('../utils.js');

//index controller CRUD for READ (all or filtered records)
const index = async ( req, res, next ) => {
    const { filter } = req.query;
    let where = {
        title:{
            contains: filter,
        },
    };

    try{
        const photos = await prisma.photo.findMany({
            where,
            select:{
                id: true,
                title: true,
                slug: true,
                description: true,
                visible: true,
                image: true,
                categories:{
                    select:{
                        id: true,
                        name: true,
                        slug: true,
                    }
                },
                user:{
                    select:{
                        id: true,
                        email: true,
                        username: true,
                    }
                }
            },
        });
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
        const photo = await prisma.photo.findUnique({
            where:{slug},
            include: {
                categories:{
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                user: {
                    select:{
                        id: true,
                        email:true,
                        username: true,
                        image: true,  
                    }
                },
            },
            
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
    const user = req.user;

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
        userId: user,
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
            new_photo:{
                id: photo.id,
                title: photo.title,
                slug: photo.slug,
            }
        });

    }catch(err){
        return next(err);
    }
};

const update = async ( req, res, next ) => {
    const {title, description, visible} = req.body;
    const { sanitizedCategories } = req;
    const { filename } = req.file;
    const image = `photos_images/${filename}`;

    const { slug } = req.params;

    let uniqueSlug = makeSlug(title);
    try{
        let allSlugs = await prisma.photo.findMany({
            where: {
                slug: {
                    not: slug // Escludi lo slug del record corrente
                }
            },
            select: {
                slug: true,
            }
        });

        allSlugs = allSlugs.map(e => e.slug);

        let baseSlug = uniqueSlug;
        let counter = 1;
        while(allSlugs.includes(uniqueSlug)){
            uniqueSlug = `${baseSlug}-${counter}`;
            counter++;
        }
    }catch(err){
        return next(err);
    }

    const updatedData = {
        title,
        slug: uniqueSlug,
        description,
        image,
        visible,
        categories:{
            set: sanitizedCategories,
        },

    };

    try{
        const upPhoto = await prisma.photo.update({
            where:{slug},
            data: updatedData,
        });
        res.json({
            photo: {
                id: upPhoto.id,
                title: upPhoto.title,
                slug: upPhoto.slug,
            },
        })
    }catch(err){
        return next(err);
    }
}

const destroy = async ( req, res, next ) => {
    const { slug } = req.params;

    try{
        const photoToDelete = await prisma.photo.delete({
            where:{slug}
        });
        res.json({
            success: true,
        })
    }catch(err){
        next(err);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};