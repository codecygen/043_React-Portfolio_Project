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
        const sendMailRes = await transporter.sendMail(mailOptions);
        return sendMailRes;
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = sendMail;