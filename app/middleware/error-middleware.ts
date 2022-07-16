/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

interface ErrorResponse {
  statusCode: number
  message: string
}

export default (
  error: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(error.statusCode)
    .json({ error: error.message || 'internal server error' })
}
