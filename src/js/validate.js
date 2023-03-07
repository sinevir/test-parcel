import Joi from "joi";

console.log(Joi);

const passScheme = Joi.string().min(3).max(10);

export default
function validatePassword(password) {
    return passScheme.validate(password);
} 