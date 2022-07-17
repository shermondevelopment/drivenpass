import * as Joi from 'joi'

const schemaNotation = Joi.object({
  title: Joi.string().max(50).required(),
  notation: Joi.string().max(1000).required()
})

export default schemaNotation
