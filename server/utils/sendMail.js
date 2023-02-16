const nodemailer = require("nodemailer");

const dotenv = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    service: 'Zoho',
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendMail = async (emailData) => {

    const {IP, Name, Subject, Message} = emailData;

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TOEMAIL,
        subject: `Test`,
        html: `
            <p>IP Address: ${IP}</p>
            <p>Name: ${Name}</p>
            <p>Subject: ${Subject}</p>
            <p>Message: ${Message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = sendMail;