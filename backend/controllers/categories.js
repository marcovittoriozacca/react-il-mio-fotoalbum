const prisma = require('../prisma/prismaClient.js');
const { makeSlug } = require('../utils.js');

const index = async ( req, res, next ) => {

    try{
        const categories = await prisma.category.findMany({
            select:{
                id: true,
                name: true,
                slug: true,
            },
        });

        return res.json({
            categories
        });

    }catch(err){
        return next(err);
    }

}

const create = async ( req, res, next ) => {

    const { name } = req.body;
    const slug = makeSlug(name);

    try{
        const data = {
            name,
            slug
        }

        const newCategory = await prisma.category.create({data});
        return res.json({
            category:{
                id: newCategory.id,
                name: newCategory.name,
                slug: newCategory.slug,
            },
        });
    }catch(err){
        return next(err);
    }
}

const destroy = async ( req, res, next ) => {
    const { slug } = req.params;

    try{
        const catToDelete = await prisma.category.delete({
            where: {slug},
        });
        return res.json({
            success: true,
        })
    }catch(err){
        return next(err);
    }

}
module.exports = {
    index,
    create,
    destroy
}