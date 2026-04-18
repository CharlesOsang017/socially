import express from 'express'
import { createPost, getFollowingPosts, getUserPosts, getLikedPosts, deletePost, getAllPosts, commentOnPost, likeUnlikePost } from '../controllers/post.controller.js'

const router = express.Router()

router.get("/likes/:id", getLikedPosts)
router.post('/create', createPost)
router.delete("/:id", deletePost)
router.post("/comment/:id", commentOnPost)
router.post("/like/:id", likeUnlikePost)
router.get("/all", getAllPosts)
router.get("/following", getFollowingPosts)
router.get("/user/:username", getUserPosts)

export default router