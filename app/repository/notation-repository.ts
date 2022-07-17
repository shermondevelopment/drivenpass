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
  return await prisma.note.findUnique({
    where: {
      id: idNotation
    }
  })
}

export const findNotationByUser = async (user_id: string) => {
  return await prisma.note.findMany({
    where: {
      user_id
    }
  })
}

export const deleteNotation = async (idNotation: string) => {
  return await prisma.note.delete({
    where: {
      id: idNotation
    }
  })
}
