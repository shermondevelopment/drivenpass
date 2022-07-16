/** dotenv - variables */
import 'dotenv/config'

/** async errors */
import 'express-async-errors'

/** routers */
import routers from './routers'

/** cors */
import cors from 'cors'

/** middleware */
import errorMiddleware from './middleware/error-middleware'

/** express */
import express, { json } from 'express'

/** initializing server */
const app = express()

/** middleware setting server */
app.use(json())
app.use(cors())
app.use(routers)
app.use(errorMiddleware)

/** running server in port 5000 */
app.listen(process.env.PORT || 5000, () =>
  console.log(`app running in ${process.env.PORT} 🚀🚀🚀🚀🚀`)
)
