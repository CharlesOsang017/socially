import express from 'express'
import { getNotifications, deleteNotifications } from '../controllers/notification.controller.js'

const router = express.Router()

router.get("/", getNotifications)
router.delete("/", deleteNotifications)
export default router;