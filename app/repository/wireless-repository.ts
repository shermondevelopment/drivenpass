import { Wireless } from '@prisma/client'
import prisma from '../database'

export const findManyWireless = async (user_id: string) => {
  return await prisma.wireless.findMany({
    where: {
      user_id
    }
  })
}

export const createWireless = async (wireless: Omit<Wireless, 'id'>) => {
  return await prisma.wireless.create({
    data: wireless
  })
}

export const findWireless = async (idWireless: string) => {
  return await prisma.wireless.findUnique({
    where: {
      id: idWireless
    }
  })
}

export const deleteWireless = async (idWireless: string) => {
  return await prisma.wireless.delete({
    where: {
      id: idWireless
    }
  })
}
