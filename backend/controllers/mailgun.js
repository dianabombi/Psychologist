const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun.client ({ 
    username:'api', 
    key: process.env.MAILGUN_API_KEY 
});

const sendEmail = async (to, subject, text) => {
    const data = {
        from: "Excited User <mailgun@sandbox070cf71e8eb749af8a86a9897e49a5cb.mailgun.org>",
        to,
        subject,
        text,
     }

    try {
        await mg.messages.create(DOMAIN, data);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
