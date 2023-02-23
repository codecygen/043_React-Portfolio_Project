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

const sendMail = async (emailTitle, emailBody) => {

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TOEMAIL,
        subject: emailTitle,
        html: emailBody
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = sendMail;