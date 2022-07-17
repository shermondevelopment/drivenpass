import { Wireless } from '@prisma/client'
import { createWireless } from '../repository/wireless-repository'
import { encrypt } from '../utils/encrypt'

const CreateWirelessService = async (wirelessData: Omit<Wireless, 'id'>) => {
  await createWireless({
    ...wirelessData,
    password: encrypt(wirelessData.password)
  })
}

export default CreateWirelessService
