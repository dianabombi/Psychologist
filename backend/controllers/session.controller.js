const Session = require('../models/sessionSchema');

const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving sessions", error });
    }
};

const addSession = async (req, res) => {
    try {
        const { date, time, duration, client, notes } = req.body;
        const newSession = new Session({ date, time, duration, client, notes });
        await newSession.save();
        res.status(201).json({ msg: "Session added successfully", session: newSession });
    } catch (error) {
        res.status(500).json({ msg: "Error adding session", error });
    }
};

const updateSession = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSession = await Session.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedSession) return res.status(404).json({ msg: "Session not found" });
        res.status(200).json({ msg: "Session updated successfully", session: updatedSession });
    } catch (error) {
        res.status(500).json({ msg: "Error updating session", error });
    }
};

const deleteSession = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSession = await Session.findByIdAndDelete(id);
        if (!deletedSession) return res.status(404).json({ msg: "Session not found" });
        res.status(200).json({ msg: "Session deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting session", error });
    }
};

module.exports = {
    getSessions,
    addSession,
    updateSession,
    deleteSession,
};
