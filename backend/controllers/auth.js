require('dotenv').config();
const { hashPassword, comparePassword } = require('../utils.js');
const { generateToken } = require('../middlewares/jwtToken.js');
const prisma = require('../prisma/prismaClient.js');

const register = async ( req, res, next ) => {
    const { email, password, username } = req.body;
    const { filename } = req.file;

    const hashedPassword = await hashPassword(password + process.env.PEPPER_KEY);
    
    const newUser = {
        email,
        password: hashedPassword,
        image: `users_images/${filename}`,
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


const login = async ( req, res, next ) => {

    const { email, password } = req.body;

    try{
        const user = await prisma.user.findUnique({
            where: {email},
        });
        if(!user) throw new Error ("There's no account linked to this email")

        const checkPassword = await comparePassword(password, user.password);
        if(!checkPassword) throw new Error ("Wrong Password");

        const token = generateToken(user);
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
    login,
}