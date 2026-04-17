import express from 'express'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectMongoDB } from './db/connectMongoDBjs.js'
import cookieParser from 'cookie-parser'

dotenv.config()


const app = express()

const port = process.env.PORT || 8000
// middlewares
app.use(cookieParser())
app.use(express.json()) // to parse json data
app.use(express.urlencoded({ extended: true })) // to parse form data(urlencoded)
// routes
app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
    connectMongoDB()
})