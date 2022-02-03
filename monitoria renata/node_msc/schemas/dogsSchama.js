const Joi = require('joi');

module.exports = Joi.object({
  dogs: Joi.string().min(2).required(),
  breed: Joi.string(),
  age: Joi.number().required(),
}).messages({
  'any.required': 'A chave {#label} é obrigatoria',
  'string.base': '{#label} deve ser uma string',
  'string.min': 'É obrigatório um minimo de 2 caracteres em {#label}',
});