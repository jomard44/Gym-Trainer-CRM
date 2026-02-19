import express from "express"
import { getTrainerProfile, updateTrainerProfile } from "../controllers/tranierController"

const trainerRouter = express.Router()

trainerRouter.get("/me",getTrainerProfile)
trainerRouter.put("/me",updateTrainerProfile)

export default trainerRouter