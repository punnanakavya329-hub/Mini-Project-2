const Attendance = require("../models/Attendance");

// CREATE
exports.addAttendance = async (req, res) => {
  try {
    const data = await Attendance.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getAttendance = async (req, res) => {
  try {
    const data = await Attendance.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateAttendance = async (req, res) => {
  try {
    const data = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};