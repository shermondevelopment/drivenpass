import Cryptr from 'cryptr'

const crpter = new Cryptr(process.env.CRYPT_HASH ?? 'mycrpter')

export const encrypt = (value: string) => {
  return crpter.encrypt(value)
}

export const decrypt = (value: string) => {
  return crpter.decrypt(value)
}
