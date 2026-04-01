const Student = require('../models/Student');

exports.login = async(req, res) => {
    try {
        console.log("LOGIN HIT");
        console.log("BODY:", req.body);

        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email & Password required" });
        }

        const user = await Student.findOne({ email });

        console.log("USER:", user);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        return res.json({ message: "Login successful", user });

    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).json({ message: "Server error" });
    }
};