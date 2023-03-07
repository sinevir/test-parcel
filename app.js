console.log('Hello world!')

const Joi = require('joi');

const passSchema = Joi.string().min(3).max(10).alphanum(); 

console.log(passSchema.validate('qhgfdt'))

const shortid = require('shortid');
 
console.log('Згенерований shortID: ', shortid.generate());

