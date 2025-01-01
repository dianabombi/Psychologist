// Used for testing purposes of e-mail responder

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'process.env.ETHEREAL_USER',
        pass: 'process.env.ETHEREAL_PASS',
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: 'your_email@ethereal.email',
            to,
            subject,
            text,
        });
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
