import { Request, Response } from 'express'
import {
  CreateWirelessService,
  FindSingleWirelessService,
  FindWirelessService
} from '../../services/wireless-service'

export const NewWirelessController = async (req: Request, res: Response) => {
  const user_id = res.locals.user.id
  const { label, wireless, password } = req.body

  await CreateWirelessService({
    label,
    wireless,
    password,
    user_id
  })

  res.sendStatus(201)
}

export const FindWirelessByIdController = async (
  req: Request,
  res: Response
) => {
  const user_id = res.locals.user.id
  const { idWireless } = req.params

  const wireless = await FindSingleWirelessService(idWireless, user_id)
  res.status(200).json(wireless)
}

export const FindWirelessController = async (req: Request, res: Response) => {
  const user_id = res.locals.user.id

  const wireless = await FindWirelessService(user_id)
  res.status(200).json(wireless)
}
