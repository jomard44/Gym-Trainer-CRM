export const getTrainerDashboard = async (req, res) => {
  try {
    const trainerId = req.user.id;

    const totalClients = await Client.countDocuments({ trainer: trainerId });

    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - 7);

    const sessionsThisWeek = await Session.countDocuments({
      trainer: trainerId,
      datetime: { $gte: startOfWeek },
    });

    const clients = await Client.find({ trainer: trainerId });

    let clientsWithNoProgress = 0;

    for (let client of clients) {
      const log = await ProgressLog.findOne({
        client: client._id,
        trainer: trainerId,
        date: { $gte: startOfWeek },
      });

      if (!log) clientsWithNoProgress++;
    }

    res.json({
      totalClients,
      sessionsThisWeek,
      clientsWithNoProgress,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
