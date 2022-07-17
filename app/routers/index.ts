import { Router } from 'express'

/** router auth */
import auth from './auth-router'

/** credential */
import credentialRouter from './credential-router'

/** notation */
import notationRouter from './notation-router'

const routers = Router()

routers.use(auth)
routers.use(credentialRouter)
routers.use(notationRouter)

export default routers
