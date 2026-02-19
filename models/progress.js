import mongoose from "mongoose";

const progressLogSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  date: { type: Date, default: Date.now },
  weight: { type: Number },
  bodyFat: { type: Number },
  notes: { type: String },
},{timestamps: true});

export default mongoose.model("ProgressLog", progressLogSchema);
