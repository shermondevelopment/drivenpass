import { Router } from 'express'

/** router auth */
import auth from './auth-router'

/** credential */
import credentialRouter from './credential-router'

const routers = Router()

routers.use(auth)
routers.use(credentialRouter)

export default routers
