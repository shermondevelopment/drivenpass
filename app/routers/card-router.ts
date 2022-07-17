import { Router } from 'express'

/** middleware */
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'
import tokenValidation from '../middleware/token-validation'

/** card schema */
import { cardSchema } from '../validation/card-schema'
import { NewCardController } from '../controllers/card/card-controller'

const cardRouter = Router()

/** new card */
cardRouter.post(
  '/card',
  tokenValidation,
  validationSchemaMiddleware(cardSchema),
  NewCardController
)

export default cardRouter
