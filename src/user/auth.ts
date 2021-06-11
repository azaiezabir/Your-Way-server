import { User } from "./user.interface";

import Joi from "@hapi/joi";

//signUp validation 

const signupValidation = (user:User) => {
    const schema = {
        username: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(user,schema)
}
const loginValidation = (user:User) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(user, schema)
}

export = {signupValidation,loginValidation}
