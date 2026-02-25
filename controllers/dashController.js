import Client from "../models/client.js"
import Trainer from "../models/trainer.js";

export const getTrainerDashboard = async (req, res) => {
try {
    const trainer = await Trainer.findOne({ user: req.user.id });

    if (!trainer) {
      return res.status(404).json({ message: "trainer not found" });
    }

    const clients = await Client.find({ trainer: trainer._id })
      .populate("user");

    res.status(200).json({
      clients,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default getTrainerDashboard
