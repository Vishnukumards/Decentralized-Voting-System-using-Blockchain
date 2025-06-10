// utils/otpService.js
require('dotenv').config();
const twilio = require('twilio');
const nodemailer = require('nodemailer');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Generates a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Sends OTP via SMS
async function sendSMSOTP(phoneNumber, otp) {
  await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phoneNumber
  });
}

// Sends OTP via Email
async function sendEmailOTP(email, otp) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Voting App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Voting OTP",
    text: `Your OTP is ${otp}`
  });
}

module.exports = {
  generateOTP,
  sendSMSOTP,
  sendEmailOTP
};
