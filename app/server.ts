/** dotenv - variables */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** initializing server */
const app = express()

/** running server in port 5000 */
app.listen(process.env.PORT || 5000, () => console.log(`app running in ${process.env.PORT} 🚀🚀🚀🚀🚀`))