import Program from "../models/program.js";

export const getPrograms = async (req, res) => {
  try {
    const program = await Program.find({ trainer: req.user.id });
    if (program.length === 0) {
      return res.status(404).json({ message: "you have no programs" });
    }
    res.status(200).json({ program });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await Program.findOne({ _id: id, trainer: req.user.id });
    if (!program) {
      return res.status(404).json({ message: "you have no programs" });
    }
    res.status(200).json({ program });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProgram = async (req, res) => {
  try {
    const newProgram = await Program.create({
      ...req.body,
      trainer: req.user.id,
    });
    res.status(201).json({ newProgram });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await Program.findOneAndUpdate(
      { _id: id, trainer: req.user.id },
      req.body,
      { new: true },
    );
    if (!program) {
      return res.status(404).json({ message: "this program does not exist" });
    }
    res.status(200).json({ message: "program updated successfuly" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    Program.findOneAndDelete({ _id: id, trainer: req.user.id });
    if (!deletedProgram) {
      return res.status(404).json({ message: "this program does not exist" });
    }
    res.status(200).json({ message: "program have been deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
