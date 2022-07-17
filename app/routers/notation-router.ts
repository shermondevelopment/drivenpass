import { Router } from 'express'

/** controller notation */
import {
  FindSingleNotationController,
  NewNotationController
} from '../controllers/notation/notation-controller'

/** middleware */
import tokenValidation from '../middleware/token-validation'
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'

/** schemas */
import schemaNotation from '../validation/notation-schema'

const notationRouter = Router()

/** new notation */
notationRouter.post(
  '/notation',
  tokenValidation,
  validationSchemaMiddleware(schemaNotation),
  NewNotationController
)

/** find single notation */
notationRouter.get(
  '/notation/:idNotation',
  tokenValidation,
  FindSingleNotationController
)

export default notationRouter
