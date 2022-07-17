import Joi from 'joi'

import { Credential } from '@prisma/client'

const schemaCredential = Joi.object<Omit<Credential, 'id'>>({
  label: Joi.string().required(),
  username: Joi.string().required(),
  url: Joi.string().uri().required(),
  password: Joi.string().required()
})

export default schemaCredential
