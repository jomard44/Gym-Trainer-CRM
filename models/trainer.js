import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  specialization: { type: String },
  clients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Client" }],
});

export const Trainer = mongoose.model("Trainer", trainerSchema);
