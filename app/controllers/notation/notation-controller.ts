import { Request, Response } from 'express'
import {
  DeleteNotationService,
  FindNotationService,
  FindSingleNotationService,
  NewNotationService
} from '../../services/notation-service'

export const NewNotationController = async (req: Request, res: Response) => {
  const { title, notation } = req.body

  const userIdRequest = res.locals.user.id

  const notationResponse = await NewNotationService(
    title,
    notation,
    userIdRequest
  )

  res.status(200).json(notationResponse)
}

export const FindSingleNotationController = async (
  req: Request,
  res: Response
) => {
  const { idNotation } = req.params
  const userIdRequest = res.locals.user.id

  const notation = await FindSingleNotationService(idNotation, userIdRequest)

  res.status(200).json(notation)
}

export const FindNotationController = async (req: Request, res: Response) => {
  const userIdRequest = res.locals.user.id

  const notation = await FindNotationService(userIdRequest)

  res.status(200).json(notation)
}

export const DeleteNotionController = async (req: Request, res: Response) => {
  const { idNotation } = req.params
  const userIdRequest = res.locals.user.id

  await DeleteNotationService(idNotation, userIdRequest)

  res.sendStatus(204)
}
