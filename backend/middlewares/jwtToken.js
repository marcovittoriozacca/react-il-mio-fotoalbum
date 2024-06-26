const jwt = require("jsonwebtoken");
require('dotenv').config();

const generateToken = user => {

    const payload = {
    id: user.id,
    email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" });
}

const authenticateWithJWT = ( req, res, next ) => {
    const { authorization } = req.headers;
    if(!authorization) throw new Error ("You must provide an authorization token to access this route");
    
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET,
        (err, user) => {
            if(err){
                err.status = 401;
                return next(err);
            }
            req.user = user.id;
            return next();
        });
}

module.exports = {
    generateToken,
    authenticateWithJWT
}