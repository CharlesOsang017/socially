import express from 'express'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectMongoDB } from './db/connectMongoDBjs.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.route.js'
import { protectRoute } from './middleware/protectRoute.middleware.js'
import {v2 as cloudinary} from 'cloudinary'
import postRoutes from './routes/post.route.js'
import notificationRoutes from './routes/notication.route.js'


dotenv.config()
// configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()

const port = process.env.PORT || 8000


// middlewares
app.use(cookieParser())
app.use(express.json({limit: "5mb"})) // to parse json data
app.use(express.urlencoded({ extended: true })) // to parse form data(urlencoded)



// routes
app.use('/api/auth', authRoutes)
app.use('/api/user/',protectRoute, userRoutes)
app.use('/api/post/',protectRoute, postRoutes)
app.use('/api/notification/',protectRoute, notificationRoutes)


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
    connectMongoDB()
})