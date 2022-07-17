import { Request, Response } from 'express'
import CreateWirelessService from '../../services/wireless-service'

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
