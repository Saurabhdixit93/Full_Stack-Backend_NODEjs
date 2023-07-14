const nodemailer = require('nodemailer');
// Transporter
module.exports.transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  secure: true,
});
