/** repository */
import { createUser, findByEmail } from '../repository/auth-repository'

/** error handle */
import { AppError } from '../utils/error'

/** bcrypt */
import bcrypt from 'bcrypt'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

const SignupService = async (email: string, password: string) => {
  const searchByUser = await findByEmail(email)

  if (searchByUser) {
    return AppError(401, 'e-mail already registered')
  }

  const addUser = await createUser(email, bcrypt.hashSync(password, 10))

  const token = jwt.sign({ id: addUser?.id }, process.env.JWT_KEY as string)

  return token
}

export default SignupService
