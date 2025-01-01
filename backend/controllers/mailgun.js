const mailgun = require('mailgun-js');

const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

const sendEmail = async (to, subject, text) => {
    const data = {
        from: 'no-reply@yourdomain.com',
        to: to,
        subject: subject,
        text: text,
    };

    try {
        await mg.messages().send(data);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
