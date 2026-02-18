import express from "express";
import userRouter from "./userRoutes.js";
import clientRouter from "./clientRoutes.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();
router.use("/users", userRouter);
router.use("/clients", auth, clientRouter);

export default router;
