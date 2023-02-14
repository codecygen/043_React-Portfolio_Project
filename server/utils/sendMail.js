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

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TOEMAIL,
        subject: `Test`,
        html: `
            <p>${emailData.emailData.IP}</p>
            <p>${emailData.emailData.Name}</p>
            <p>${emailData.emailData.Subject}</p>
            <p>${emailData.emailData.Message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = sendMail;