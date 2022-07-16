import { User } from '@prisma/client'
import prisma from '../database'

export const findByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { email } })
  return user
}
