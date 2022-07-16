/** repository */
import { findByEmail } from '../repository/auth-repository'

/** error handle */
import { AppError } from '../utils/error'

/** bcrypt */
import bcrypt from 'bcrypt'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

const SigninService = async (email: string, password: string) => {
  const searchByUser = await findByEmail(email)

  if (!searchByUser) {
    return AppError(401, 'email not registered')
  }

  if (!(await bcrypt.compare(password, searchByUser.password))) {
    return AppError(401, 'incorrect password')
  }

  const token = jwt.sign({ id: searchByUser.id }, process.env.JWT_KEY as string)

  return token
}

export default SigninService
