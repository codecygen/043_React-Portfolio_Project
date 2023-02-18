const nodemailer = require("nodemailer");
const getMoreInfo = require("../utils/getMoreInfo");

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

    const additionalInfo = await getMoreInfo(IP);

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TOEMAIL,
        subject: `Email from ${process.env.PORTFOLIO_WEBSITE}`,
        html: `
            <p><strong>IP:</strong> ${IP}</p>
            <p><strong>Country:</strong> ${additionalInfo.country}</p>
            <p><strong>City:</strong> ${additionalInfo.city}</p>
            <p><strong>Name:</strong> ${Name}</p>
            <p><strong>Subject:</strong> ${Subject}</p>
            <p><strong>Message:</strong> ${Message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = sendMail;