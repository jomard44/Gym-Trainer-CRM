import express from "express";
import {
  createProgram,
  deleteProgram,
  editProgram,
  getProgram,
  getPrograms,
} from "../controllers/programController.js";

const programRouter = express.Router();

programRouter.get("/", getPrograms);
programRouter.get("/:id", getProgram);
programRouter.post("/", createProgram);
programRouter.put("/:id", editProgram);
programRouter.delete("/:id", deleteProgram);

export default programRouter;
