import Trainer from "../models/trainer.js";
export const getTrainerProfile = async (req, res) => {
  const trainer = await Trainer.findOne({ trainer: req.user.id })
  res.json(trainer);
};

export const updateTrainerProfile = async (req, res) => {
  const trainer = await Trainer.findOneAndUpdate(
    { trainer: req.user.id },
    req.body,
    { new: true },
  );
  res.json(trainer);
};
