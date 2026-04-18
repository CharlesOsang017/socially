import express from "express";
import {updateUser, followUnfollowUser,getSuggestedUsers, getProfile } from "../controllers/user.controller.js";

const router = express.Router()

router.get("/profile/:username", getProfile)
router.post("/follow/:id", followUnfollowUser)
router.get("/suggested", getSuggestedUsers)
router.post("/update", updateUser)
export default router