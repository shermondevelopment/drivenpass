import { Request, Response } from 'express'

/** service  */
import {
  NewCardService,
  FindSingleCardService
} from '../../services/card-service'

export const NewCardController = async (req: Request, res: Response) => {
  const cardData = req.body

  const userIdRequest = res.locals.user.id

  const card = await NewCardService(cardData, userIdRequest)

  res.status(200).json(card)
}

export const FindCardController = async (req: Request, res: Response) => {
  const { idCard } = req.params

  const userIdRequest = res.locals.user.id

  const cardSearch = await FindSingleCardService(idCard, userIdRequest)

  res.status(200).json(cardSearch)
}
