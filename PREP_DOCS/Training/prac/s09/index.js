const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "deontae46@ethereal.email",
    pass: "5HUZKAJ2yVKkW5Jbtf",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Samrat Kasture" <samratmkasture@gmail.com>', // sender address
    to: "samratmkasture@gmail.com", // list of receivers
    subject: "Notification Test Mail", // Subject line
    text: "Hello world?", // plain text body
    // html: "<b>Test Email Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
