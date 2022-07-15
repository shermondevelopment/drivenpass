import { Request, Response } from 'express'

interface ErrorResponse {
  status: number
  message: string
}

export default (error: ErrorResponse, req: Request, res: Response) => {
  res.status(error.status).json({ error: error.message })
}
