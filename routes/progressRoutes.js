import express from "express";
import {
  createProgress,
  getProgress,
} from "../controllers/progressController.js";

const progressRouter = express.Router();

progressRouter.get("/", getProgress);
progressRouter.post("/", createProgress);

export default progressRouter;
