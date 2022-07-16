import { Request, Response } from 'express'

/** service signin */
import SigninService from '../../services/signin-service'

/** signin controller */
const SigninController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const token = await SigninService(email, password)

  res.status(200).json({ token })
}

export default SigninController
