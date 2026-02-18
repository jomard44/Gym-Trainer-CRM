import express from "express"
import { register, signin } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",register)
userRouter.post("/signin",signin)

export default userRouter