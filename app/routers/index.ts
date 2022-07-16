import { Router } from 'express'

/** router auth */
import auth from './auth-router'

const routers = Router()

routers.use(auth)

export default routers
