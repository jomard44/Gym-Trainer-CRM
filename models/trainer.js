import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  specialization: { type: String },
  clients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Client" }],
});

export default mongoose.model("Trainer", trainerSchema);
