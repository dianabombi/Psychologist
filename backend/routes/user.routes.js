const express = require("express");
const router = express.Router();
const axios = require("axios");
const {
    register,
    login,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");

// User routes
router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Mailgun email route
router.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    // Input validation
    if (!to || !subject || !text) {
        return res.status(400).json({ error: "All fields (to, subject, text) are required." });
    }

    try {
        const DOMAIN = process.env.MAILGUN_DOMAIN || 'sandbox070cf71e8eb749af8a86a9897e49a5cb.mailgun.org';
        const response = await axios.post(`https://api.mailgun.net/v3/${DOMAIN}/messages`, {
            from: `YourApp <mailgun@${DOMAIN}>`,
            to,
            subject,
            text,
        }, {
            auth: {
                username: "api",
                password: process.env.MAILGUN_API_KEY,
            },
        });

        console.log("Mail sent:", response.data);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Mailgun error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
});

module.exports = router;
