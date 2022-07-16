import * as Joi from 'joi'

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
})

export default signinSchema
