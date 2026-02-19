import express from "express";
import userRouter from "./userRoutes.js";
import clientRouter from "./clientRoutes.js";
import { auth } from "../middleware/auth.js";
import programRouter from "./programRoutes.js";
import progressRouter from "./progressRoutes.js";
import sessionRouter from "./sessionRoutes.js";
import trainerRoutes from "./trainerRoutes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/clients", auth, clientRouter);
router.use("/clients/programs", auth, programRouter);
router.use("clients/progress", auth, progressRouter);
router.use("/sessions", auth, sessionRouter);
router.use("/", auth, trainerRoutes);

export default router;
