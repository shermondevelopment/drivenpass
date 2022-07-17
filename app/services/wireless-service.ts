import { Wireless } from '@prisma/client'
import { createWireless, findWireless } from '../repository/wireless-repository'
import { decrypt, encrypt } from '../utils/encrypt'
import { AppError } from '../utils/error'

export const CreateWirelessService = async (
  wirelessData: Omit<Wireless, 'id'>
) => {
  await createWireless({
    ...wirelessData,
    password: encrypt(wirelessData.password)
  })
}

export const FindSingleWirelessService = async (
  idWireless: string,
  userIdRequest: string
) => {
  const searchWirelessById = await findWireless(idWireless)

  if (!searchWirelessById) {
    return AppError(404, 'wireless not exists')
  }

  if (searchWirelessById.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to wireless')
  }

  return {
    ...searchWirelessById,
    password: decrypt(searchWirelessById.password)
  }
}
