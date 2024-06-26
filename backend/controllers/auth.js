require('dotenv').config();
const { hashPassword } = require('../utils.js');
const { generateToken } = require('../middlewares/jwtToken.js');
const prisma = require('../prisma/prismaClient.js');

const register = async ( req, res, next ) => {
    const { email, password, username } = req.body;
    const { filename } = req.file;

    const hashedPassword = await hashPassword(password + process.env.PEPPER_KEY);
    
    const newUser = {
        email,
        password: hashedPassword,
        image: `users_image/${filename}`,
        username: username || 'User',
    };
    
    try{
        const user = await prisma.user.create({
            data: newUser,
        });

        const token = generateToken({user});
        res.json({
            token,
            user:{
                id: user.id,
                email: user.email,
                username: user.username,
                image: user.image,
            }
        });
    }catch(err){
        return next(err);
    }
}

module.exports = {
    register,
}