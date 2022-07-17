import { Router } from 'express'

/** controllers */
import {
  CredentialController,
  FindSingleCredential
} from '../controllers/credentials/credential-controller'

/** middleware */
import tokenValidation from '../middleware/token-validation'
import validationSchemaMiddleware from '../middleware/validation-schema-middleware'

/** schema */
import schemaCredential from '../validation/credential-schema'

const credentialRouter = Router()

credentialRouter.post(
  '/credential',
  tokenValidation,
  validationSchemaMiddleware(schemaCredential),
  CredentialController
)

credentialRouter.get(
  '/credential/:idCredential',
  tokenValidation,
  FindSingleCredential
)

export default credentialRouter
