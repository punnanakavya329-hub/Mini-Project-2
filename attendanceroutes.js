const express = require("express");
const router = express.Router();
const {
  addAttendance,
  getAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");

router.post("/", addAttendance);
router.get("/", getAttendance);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance);

module.exports = router;