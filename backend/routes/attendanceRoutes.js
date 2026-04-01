const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

router.get('/:studentId', async(req, res) => {
    const data = await Attendance.find({ studentId: req.params.studentId });
    res.json(data);
});

module.exports = router;