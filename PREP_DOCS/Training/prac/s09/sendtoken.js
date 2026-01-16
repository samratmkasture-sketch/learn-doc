const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "deontae46@ethereal.email",
    pass: "5HUZKAJ2yVKkW5Jbtf",
  },
});
const token = jwt.sign(
  {
    data: { id: "userIDdata222" },
  },
  "ourSecretKey",
  { expiresIn: "20m" }
);

const mailConfigurations = {
  // It should be a string of sender/server email
  from: "mrtwinklesharma@gmail.com",

  to: "samratmkasture@gmail.com",

  // Subject of Email
  subject: "Email Verification",

  // This would be the text of email body
  html: `Hi! There, You have recently visited 
		our website and entered your email. 
		Please follow the given link to verify your email 
		<a target="_blank" href="http://localhost:3000/verify/${token}">Link</a> 
		Thanks`,
};

transporter.sendMail(mailConfigurations, function (error, info) {
  if (error) throw Error(error);
  console.log("Email Sent Successfully");
  console.log(info);
});
