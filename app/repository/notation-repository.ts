import prisma from '../database'

export const findByNotationTitleAndId = async (
  title: string,
  user_id: string
) => {
  return await prisma.note.findFirst({
    where: {
      title,
      AND: { user_id }
    }
  })
}

export const createNotation = async (
  title: string,
  notation: string,
  user_id: string
) => {
  return await prisma.note.create({
    data: {
      title,
      notation,
      user_id
    }
  })
}

export const findSingleNotation = async (idNotation: string) => {
  return await prisma.note.findFirst({
    where: {
      id: idNotation
    }
  })
}
