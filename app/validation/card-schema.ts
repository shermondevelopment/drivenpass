import * as Joi from 'joi'

export const cardSchema = Joi.object({
  number: Joi.string().required(),
  holder_name: Joi.string().required(),
  secure_code: Joi.string().required(),
  expiration_date: Joi.date().required(),
  is_virtual: Joi.boolean().required(),
  type_card: Joi.string().valid('credit', 'debt', 'both').required(),
  password: Joi.string().required(),
  label: Joi.string().required()
})
