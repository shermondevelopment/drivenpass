import { Request, Response, NextFunction } from 'express'

import { ObjectSchema } from 'joi'
import { AppError } from '../utils/error'

export default (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
      AppError(422, error.message)
    }
    next()
  }
}
