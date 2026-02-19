import express from "express";
import {
  createSession,
  getSessions,
  getSession,
  editSessions,
  deleteSession,
} from "../controllers/sessionController.js";

const sessionRouter = express.Router();

sessionRouter.get("/trainer", getSessions);

sessionRouter.get("/trainer/:id", getSession);
sessionRouter.post("/trainer", createSession);
sessionRouter.put("/trainer/:id", editSessions);
sessionRouter.delete("trainer/:id", deleteSession);

sessionRouter.get("/client", getSessions);
sessionRouter.get("/client/:id", getSession);

export default sessionRouter;
