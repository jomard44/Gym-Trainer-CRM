import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/users", router);

mongoose.connect(process.env.DB).then(
  app.listen(3000, () => {
    console.log("server is runing on port 3000");
  }),
);
