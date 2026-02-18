import express from "express";
import {
  getClients,
  getClient,
  createClient,
  editClient,
  deleteClient,
} from "../controllers/clientController.js";

const clientRouter = express.Router();

clientRouter.get("/", getClients);
clientRouter.get("/:id", getClient);
clientRouter.post("/", createClient);
clientRouter.put("/:id", editClient);
clientRouter.delete("/:id", deleteClient);

export default clientRouter;
