const { checkSchema, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const { cwd } = require('process');

module.exports = (schema) => {
    return [
        //function that checks our validation schema
        checkSchema(schema),
        //middleware that returns errors passed by validationResult and stops the execution
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){

                if(req.file){
                    fs.unlinkSync(path.join(cwd(), req.file.path));
                }

                return res.status(422).json({
                    errors: errors.array()
                });
            }
            next();
        }
    ]
}