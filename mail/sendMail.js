require('dotenv').config({path: '.private.env'});
const nodemailer = require('nodemailer');


if(!process.env.GMAIL_USER || ! process.env.GMAIL_PASSW ){
  throw new Error("You have to configure mail credentials in .private.env file.");
}

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSW 
  }
});


const sendMail = (to, subject, message)=>{
  return transporter.sendMail({
    to, 
    subject, 
    html: `<b>${message}</b>`
  })
  .then()
  .catch(error => console.log(error))
}


module.exports = sendMail;