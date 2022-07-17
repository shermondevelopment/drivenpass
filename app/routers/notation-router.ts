import { Router } from 'express'

/** controller notation */
import {
  DeleteNotionController,
  FindNotationController,
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

/** find notations */
notationRouter.get('/notation', tokenValidation, FindNotationController)

/** delete notion  */
notationRouter.delete(
  '/notation/:idNotation',
  tokenValidation,
  DeleteNotionController
)

export default notationRouter
