import express from "express"
import { getTrainerProfile, updateTrainerProfile } from "../controllers/tranierController"

const trainerRouter = express.Router()

trainerRouter.get("/trainer/me",getTrainerProfile)
trainerRouter.put("/trainer/me",updateTrainerProfile)

export default trainerRouter={}