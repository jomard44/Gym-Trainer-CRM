import Client from "../models/client.js";
import User from "../models/user.js";
import Trainer from "../models/trainer.js";

export const getClients = async (req, res) => {
  try {
    const trainer = await Trainer.findOne({ user: req.user.id });

    if (!trainer) {
      console.log(trainer)
      return res.status(404).json({ message: "trainer not found" });
    }

    const clients = await Client.find({ trainer: trainer._id }).populate(
      "user"
    );

    if (clients.length === 0) {
      return res.status(404).json({ message: "you have no clients" });
    }

    res.status(200).json({ clients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getClient = async (req, res) => {
  try {
    const { id } = req.params;

    const trainer = await Trainer.findOne({ user: req.user.id });

    const client = await Client.findOne({
      _id: id,
      trainer: trainer._id,
    });

    if (!client) {
      return res.status(404).json({ message: "client not found" });
    }

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const trainer = await Trainer.findOne({ user: req.user.id });

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    const user = await User.create({
      email: req.body.email,
      password: "default123",
      role: "client",
    });

    const newClient = await Client.create({
      user: user._id,
      trainer: trainer._id,
      goals: req.body.goals,
      age: req.body.age,
    });
    const trainerClient = await Trainer.findByIdAndUpdate(trainer._id, {
      $push: { clients: { client: newClient._id, email: user.email } },
    });

    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const editClient = async (req, res) => {
  try {
    const { id } = req.params;

    const trainer = await Trainer.findOne({ user: req.user.id });

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    const updatedClient = await Client.findOneAndUpdate(
      { _id: id, trainer: trainer._id },
      {
        goals: req.body.goals,
        age: req.body.age,
        notes: req.body.notes,
      },
      { new: true }
    );

    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const trainer = await Trainer.findOne({ user: req.user.id });

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    const deletedClient = await Client.findOneAndDelete({
      _id: id,
      trainer: trainer._id,
    });

    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({
      message: "Client deleted successfully",
      deletedClient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
