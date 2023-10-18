const nodemailer = require("nodemailer");
// SMTP_HOST= smtp.mailtrap.io
// SMTP_PORT = 2525
// SMTP_EMAIL=dd14f49777bf96
// SMTP_PASSWORD=6d34b058b42b29
// SMTP_FROM_EMAIL = Noreply@shopit.com
// SMTP_FROM_NAME = shopIt
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
