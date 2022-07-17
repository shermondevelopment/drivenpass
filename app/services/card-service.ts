import { Card } from '@prisma/client'

/* repository */
import { findCardByIdAndLabel, createCard } from '../repository/card-repository'

/** encypt */
import { encrypt } from '../utils/encrypt'

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
