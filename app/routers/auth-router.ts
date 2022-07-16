import { Router } from 'express'

/** controllers */
import SigninController from '../controllers/signin/signin-controller'

/** initializing router */
const auth = Router()

auth.post('/signin', SigninController)

export default auth
