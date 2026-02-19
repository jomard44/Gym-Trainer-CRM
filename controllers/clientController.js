import Client from "../models/client.js";

export const getClients = async (req, res) => {
  try {
    const { id } = req.params;
    const clients = await Client.find({ _id: id, user: req.user.id });
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
    const client = await Client.findOne({ _id: id, user: req.user.id });
    if (!client) {
      return res.status(404).json({ message: "you have no clients" });
    }
    res.status(200).json({ client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const newClient = await Client.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json({ newClient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, { new: true });
    if (!client) {
      return res.status(404).json({ message: "this client does not exist" });
    }
    res.status(200).json({ message: "client updated successfuly" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findOneAndDelete({ _id: id, user: req.user.id });
    if (!deletedClient) {
      return res.status(404).json({ message: "this client does not exist" });
    }
    res
      .status(200)
      .json({ message: "client have been deleted", deletedClient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
