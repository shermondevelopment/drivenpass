import { Router } from 'express'

/** controllers */
import {
  NewWirelessController,
  FindWirelessByIdController
} from '../controllers/wireless/wireless-controller'

/** middlewares */
import tokenValidation from '../middleware/token-validation'
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'

/** validation */
import schemaWireless from '../validation/wireless-schema'

const wirelessRouter = Router()

wirelessRouter.post(
  '/wireless',
  tokenValidation,
  validationSchemaMiddleware(schemaWireless),
  NewWirelessController
)

wirelessRouter.get(
  '/wireless/:idWireless',
  tokenValidation,
  FindWirelessByIdController
)

export default wirelessRouter
