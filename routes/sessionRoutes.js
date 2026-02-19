import express from "express";
import {
  createSession,
  getSessions,
  getSession,
  editSessions,
  deleteSession,
  getClientSession,
  getClientSessions,
} from "../controllers/sessionController.js";

const sessionRouter = express.Router();

sessionRouter.get("/trainer", getSessions);

sessionRouter.get("/trainer/:id", getSession);
sessionRouter.post("/trainer", createSession);
sessionRouter.put("/trainer/:id", editSessions);
sessionRouter.delete("/trainer/:id", deleteSession);

sessionRouter.get("/client", getClientSessions);
sessionRouter.get("/client/:id", getClientSession);

export default sessionRouter;
