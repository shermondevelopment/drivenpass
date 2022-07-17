/** app error */
import { AppError } from '../utils/error'

/** repository */
import {
  findByNotationTitleAndId,
  createNotation,
  findSingleNotation,
  findNotationByUser,
  deleteNotation
} from '../repository/notation-repository'

export const NewNotationService = async (
  title: string,
  notation: string,
  userIdRequest: string
) => {
  const findNotation = await findByNotationTitleAndId(title, userIdRequest)

  if (findNotation) {
    AppError(409, 'title already exists')
  }

  await createNotation(title, notation, userIdRequest)
}

export const FindSingleNotationService = async (
  idNotation: string,
  userIdRequest: string
) => {
  const findNotation = await findSingleNotation(idNotation)

  if (!findNotation) {
    return AppError(404, 'notation not exists')
  }

  if (findNotation?.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to notation')
  }

  return findNotation
}

export const FindNotationService = async (userIdRequest: string) => {
  const searchNotations = await findNotationByUser(userIdRequest)

  if (!searchNotations) {
    return AppError(404, 'notations not exists')
  }

  return searchNotations
}

export const DeleteNotationService = async (
  idNotation: string,
  userIdRequest: string
) => {
  const searchNotion = await findSingleNotation(idNotation)

  if (!searchNotion) {
    return AppError(404, 'notion not exists')
  }

  if (searchNotion?.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to notion')
  }

  await deleteNotation(idNotation)
}
