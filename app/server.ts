/** dotenv - variables */
import 'dotenv/config'

/** cors */
import cors from 'cors'

/** express */
import express, { json } from 'express'

/** initializing server */
const app = express()

/** middleware setting server */
app.use(json())
app.use(cors())

/** running server in port 5000 */
app.listen(process.env.PORT || 5000, () => console.log(`app running in ${process.env.PORT} 🚀🚀🚀🚀🚀`))