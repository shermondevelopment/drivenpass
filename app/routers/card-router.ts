import { Router } from 'express'

/** middleware */
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'
import tokenValidation from '../middleware/token-validation'

/** card schema */
import { cardSchema } from '../validation/card-schema'
import {
  NewCardController,
  FindCardController,
  FinCardsController
} from '../controllers/card/card-controller'

const cardRouter = Router()

/** new card */
cardRouter.post(
  '/card',
  tokenValidation,
  validationSchemaMiddleware(cardSchema),
  NewCardController
)

cardRouter.get('/card/:idCard', tokenValidation, FindCardController)
cardRouter.get('/card', tokenValidation, FinCardsController)

export default cardRouter
