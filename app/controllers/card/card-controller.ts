import { Request, Response } from 'express'

/** service  */
import { NewCardService } from '../../services/card-service'

export const NewCardController = async (req: Request, res: Response) => {
  const cardData = req.body

  const userIdRequest = res.locals.user.id

  const card = await NewCardService(cardData, userIdRequest)

  res.status(200).json(card)
}
