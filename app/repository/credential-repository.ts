import prisma from '../database'
import { Credential } from '@prisma/client'

export const findByCredentialToLabelAndUser = async (
  user_id: string,
  label: string
) => {
  const credential = await prisma.credential.findFirst({
    where: { user_id, AND: { label } }
  })
  return credential
}

export const createCredential = async (credential: Omit<Credential, 'id'>) => {
  return await prisma.credential.create({
    data: credential
  })
}

export const findSingleCredentialByUser = async (idCredential: string) => {
  return await prisma.credential.findFirst({
    where: {
      id: idCredential
    }
  })
}

export const FindCredential = async (user_id: string) => {
  return await prisma.credential.findMany({
    where: {
      user_id
    }
  })
}

export const removeCredential = async (idCredential: string) => {
  return await prisma.credential.delete({ where: { id: idCredential } })
}
