import express from "express";
import userRouter from "./userRoutes.js";
import clientRouter from "./clientRoutes.js";
import { auth } from "../middleware/auth.js";
import programRouter from "./programRoutes.js";
import progressRouter from "./progressRoutes.js";
import sessionRouter from "./sessionRoutes.js";
import trainerRoutes from "./trainerRoutes.js";
import getTrainerDashboard from "../controllers/dashController.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/clients", auth, clientRouter);
router.use("/programs", auth, programRouter);
router.use("/progress", auth, progressRouter);
router.use("/sessions", auth, sessionRouter);
router.use("/trainer", auth, trainerRoutes);
router.get("/dashboard/trainer", auth, getTrainerDashboard);

export default router;
