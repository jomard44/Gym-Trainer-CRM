import Session from "../models/session.js";

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ trainer: req.user.id });
    if (sessions.length === 0) {
      return res.status(404).json({ message: "you have no sessions" });
    }
    res.status(200).json({ sessions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getSession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findOne({ _id: id, trainer: req.user.id });
    if (!session) {
      return res.status(404).json({ message: "you have no session" });
    }
    res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createSession = async (req, res) => {
  try {
    const newSession = await Session.create({
      ...req.body,
      trainer: req.user.id,
    });
    res.status(201).json({ newSession });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const editSessions = async (req, res) => {
  try {
    const { id } = req.params;
    const editedSession = await Session.findOneAndUpdate(
      { _id: id, trainer: req.user.id },
      req.body,
      { new: true },
    );
    if (!editedSession) {
      return res.status(404).json({ message: "can't edit this record" });
    }
    res.status(200).json({ editedSession });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSession = await Session.findOneAndDelete({
      _id: id,
      trainer: req.user.id,
    });
    if (!deletedSession) {
      return res.status(404).json({ message: "can't delete this record" });
    }
    res.status(200).json({ deletedSession });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getClientSessions = async (req, res) => {
  try {
    const sessions = await Session.findOne({ _id: id, trainer: req.user.id });
    if (sessions.length === 0) {
      return res.status(404).json({ message: "you have no sessions" });
    }
    res.status(200).json({ sessions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getClientSession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findOne(id);
    if (!session) {
      return res.status(404).json({ message: "you have no session" });
    }
    res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
