import { Router } from 'express'

/** controllers */
import SigninController from '../controllers/signin/signin-controller'

/** middlewares */
import tokenValidation from '../middleware/token-validation'
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'

/** schema */
import signinSchema from '../validation/signin-schema'

/** initializing router */
const auth = Router()

auth.post(
  '/signin',
  tokenValidation,
  validationSchemaMiddleware(signinSchema),
  SigninController
)

export default auth
