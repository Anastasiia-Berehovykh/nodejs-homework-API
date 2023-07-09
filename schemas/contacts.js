const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),
  phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
});

module.exports = { addSchema };