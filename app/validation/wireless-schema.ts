import * as Joi from 'joi'

const schemaWireless = Joi.object({
  label: Joi.string().required(),
  wireless: Joi.string().required(),
  password: Joi.string().required()
})

export default schemaWireless
