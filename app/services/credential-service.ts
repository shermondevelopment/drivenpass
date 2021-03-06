/** app error */
import { AppError } from '../utils/error'

/** encrypt */
import { decrypt, encrypt } from '../utils/encrypt'

/** repository */
import {
  findByCredentialToLabelAndUser,
  createCredential,
  findSingleCredentialByUser,
  FindCredential,
  removeCredential
} from '../repository/credential-repository'

export const NewCredential = async (
  userIdRequest: string,
  label: string,
  url: string,
  username: string,
  password: string
) => {
  const findCredential = await findByCredentialToLabelAndUser(
    userIdRequest,
    label
  )

  if (findCredential) {
    AppError(409, 'label already exists')
  }

  return await createCredential({
    label,
    url,
    username,
    password: encrypt(password),
    user_id: userIdRequest
  })
}

export const findOneCredential = async (
  idCredential: string,
  userIdRequest: string
) => {
  const credential = await findSingleCredentialByUser(idCredential)

  if (!credential) {
    return AppError(404, 'credential not exists')
  }

  if (credential?.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to credential')
  }

  return { ...credential, password: decrypt(credential.password) }
}

export const findCredential = async (userIdRequest: string) => {
  const credentials = await FindCredential(userIdRequest)

  if (!credentials) {
    return AppError(404, 'credential not exists')
  }

  const credentialResponse = []

  for (let i = 0; i < credentials.length; i++) {
    credentialResponse.push({
      ...credentials[i],
      password: decrypt(credentials[i].password)
    })
  }

  return credentialResponse
}

export const deleteCredential = async (
  idCredential: string,
  userIdRequest: string
) => {
  const credential = await findSingleCredentialByUser(idCredential)

  if (!credential) {
    return AppError(404, 'credential not exists')
  }

  if (credential?.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to credential')
  }

  await removeCredential(idCredential)
}
