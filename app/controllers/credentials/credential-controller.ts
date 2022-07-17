import { Request, Response } from 'express'

/** services */
import {
  NewCredential,
  findOneCredential
} from '../../services/credential-service'

export const CredentialController = async (req: Request, res: Response) => {
  const { label, url, username, password } = req.body

  const userIdRequest = res.locals.user.id

  const credential = await NewCredential(
    userIdRequest,
    label,
    url,
    username,
    password
  )

  await res.status(201).json({ credential })
}

export const FindSingleCredential = async (req: Request, res: Response) => {
  const { idCredential } = req.params

  const userIdRequest = res.locals.user.id

  const credential = await findOneCredential(idCredential, userIdRequest)

  return res.status(200).json({ credential })
}
