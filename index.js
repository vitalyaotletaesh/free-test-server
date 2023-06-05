import express, {json} from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url'

import sequelize from './db.js'
import {User, Test, Question, Attempt, Testing} from './models/models.js'
import router from "./routes/index.js"
import {errorHandler} from './middleware/ErrorHandlingMiddleware.js'

const app = express()
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/', router)
app.use(errorHandler)

const PORT = process.env.PORT || 4444
const HOSTNAME = process.env.HOSTNAME || 'localhost'

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`-- Server started on port: ${PORT} and hostname: ${HOSTNAME} --`))
    } catch (err) {
        console.log(err)
    }
}

start()