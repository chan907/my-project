const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: String,
    subject: String,
    percentage: Number,
});

module.exports = mongoose.model('Attendance', attendanceSchema);