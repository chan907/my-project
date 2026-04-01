const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authController');

// ✅ IMPORTANT
router.post('/login', login);

router.get('/test', (req, res) => {
    res.json({ message: "Auth working" });
});

module.exports = router;