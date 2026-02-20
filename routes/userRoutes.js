import express from "express"
import { register, signin } from "../controllers/userController.js"
import { auth } from "../middleware/auth.js"

const userRouter = express.Router()

userRouter.post("/register",register)
userRouter.post("/signin",signin)
userRouter.get("/me",auth,(req,res)=>{
    res.json(req.user)
})

export default userRouter