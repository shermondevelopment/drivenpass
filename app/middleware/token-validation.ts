import { Request, Response, NextFunction } from 'express'

/** jwt */
import { verify } from 'jsonwebtoken'

/** AppError */
import { AppError } from '../utils/error'

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string

  if (!token) {
    return AppError(401, 'providing a token')
  }

  if (token.split(' ')[0] !== 'Bearer') {
    return AppError(401, 'badly formatted token')
  }

  try {
    const decode = verify(token, process.env.JWT_KEY as string)
    res.locals.id = decode

    next()
  } catch (error) {
    AppError(401, 'invalid or expired token')
  }
}
