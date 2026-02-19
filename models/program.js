import mongoose from "mongoose";
const programSchema = new mongoose.Schema({
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer",
   // required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
   // required: true,
  },
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  days: [
    {
      name: { type: String, required: true },
      exercises: [
        {
          name: { type: String, required: true },
          sets: { type: Number, required: true },
          reps: { type: Number, required: true },
          rest: { type: Number },
          notes: { type: String },
        },
      ],
    },
  ],
});

export default mongoose.model("Program", programSchema);
