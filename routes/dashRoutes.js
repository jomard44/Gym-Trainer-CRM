import express from "express"
import {getTrainerDashboard } from "../controllers/dashController.js"

const dashRoute = express.Router()

dashRoute.get("/dash", getTrainerDashboard)

export default dashRoute