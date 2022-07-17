import { Card } from '@prisma/client'

/* repository */
import {
  findCardByIdAndLabel,
  createCard,
  findCardById,
  findCard,
  deleteCard
} from '../repository/card-repository'

/** encypt */
import { decrypt, encrypt } from '../utils/encrypt'

/** error app */
import { AppError } from '../utils/error'

export const NewCardService = async (
  cardOptions: Omit<Card, 'id'>,
  userIdRequest: string
) => {
  const {
    label,
    password,
    secure_code,
    number,
    holder_name,
    type_card,
    expiration_date,
    is_virtual
  } = cardOptions

  const searchCard = await findCardByIdAndLabel(label, userIdRequest)

  if (searchCard) {
    return AppError(409, 'label already exists')
  }

  const card: Omit<Card, 'id'> = {
    number,
    holder_name,
    secure_code: encrypt(secure_code),
    expiration_date,
    is_virtual,
    type_card,
    password: encrypt(password),
    label,
    user_id: userIdRequest
  }

  const cardSave = await createCard(card)

  return cardSave
}

export const FindSingleCardService = async (
  idCard: string,
  userIdRequest: string
) => {
  const searchCard = await findCardById(idCard)

  if (!searchCard) {
    return AppError(404, 'card not exists')
  }

  if (searchCard?.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to card')
  }

  return { ...searchCard, password: decrypt(searchCard.password) }
}

export const FindCardService = async (userIdRequest: string) => {
  const cards = await findCard(userIdRequest)

  if (!cards) {
    return AppError(404, 'card not exists')
  }

  const card = []
  for (let i = 0; i < cards.length; i++) {
    card.push({
      ...cards[i],
      secure_code: decrypt(cards[i].password),
      password: decrypt(cards[i].password)
    })
  }

  return card
}

export const DeleteCardService = async (
  idCard: string,
  userIdRequest: string
) => {
  const searchCard = await findCardById(idCard)

  if (!searchCard) {
    return AppError(404, 'card not exists')
  }

  if (searchCard.user_id !== userIdRequest) {
    return AppError(401, 'you do not have access to card')
  }

  await deleteCard(idCard)
}
