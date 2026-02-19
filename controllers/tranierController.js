import Trainer from "../models/trainer.js";
export const getTrainerProfile = async (req, res) => {
  const trainer = await Trainer.findOne({ user: req.user.id })
  res.json(trainer);
};

export const updateTrainerProfile = async (req, res) => {
  const trainer = await Trainer.findOneAndUpdate(
    { user: req.user.id },
    req.body,
    { new: true },
  );
  res.json(trainer);
};
