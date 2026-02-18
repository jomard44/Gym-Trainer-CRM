import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer",
    required: true,
  },
  goals: { type: String },
  age: { type: Number },
  notes: { type: String },
  active: { type: Boolean, default: true },
});

export const Client = mongoose.model("Client", clientSchema);
