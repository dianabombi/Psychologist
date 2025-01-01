const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            text: text
        });
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};