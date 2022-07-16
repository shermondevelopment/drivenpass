import { Router } from 'express'

/** controllers */
import SigninController from '../controllers/signin/signin-controller'
import SignupController from '../controllers/signup/signup-controller'

/** middlewares */
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'

/** schema */
import signinSchema from '../validation/signin-schema'

/** initializing router */
const auth = Router()

auth.post('/signin', validationSchemaMiddleware(signinSchema), SigninController)

auth.post('/signup', validationSchemaMiddleware(signinSchema), SignupController)

export default auth
