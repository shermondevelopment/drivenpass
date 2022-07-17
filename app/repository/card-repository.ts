import { Card } from '@prisma/client'
import prisma from '../database'

export const findCardByIdAndLabel = async (
  label: string,
  userIdRequest: string
) => {
  return await prisma.card.findFirst({
    where: {
      label,
      AND: { user_id: userIdRequest }
    }
  })
}

export const createCard = async (cardOptions: Omit<Card, 'id'>) => {
  return await prisma.card.create({
    data: {
      ...cardOptions
    }
  })
}

export const findCardById = async (idCard: string) => {
  return await prisma.card.findUnique({
    where: {
      id: idCard
    }
  })
}

export const findCard = async (user_id: string) => {
  return await prisma.card.findMany({
    where: {
      user_id
    }
  })
}
