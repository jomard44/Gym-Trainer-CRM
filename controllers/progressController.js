import ProgressLog from "../models/progress.js";

export const getProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const progress = await ProgressLog.find({
      client: id,
      trainer: req.user.id,
    });
    if (progress.length === 0) {
      return res.status(404).json({ message: "no progress record found" });
    }

    res.status(200).json({ progress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProgress = async (req, res) => {
  try {
    const progressRecord = await ProgressLog.create({
      ...req.body,
      trainer: req.user.id,
    });

    res.status(201).json({ progressRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
