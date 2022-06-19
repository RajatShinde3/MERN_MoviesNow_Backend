const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  requireTLS:true,
  auth:{
    user:'moviesnoweb@gmail.com',
    pass:'RajatLaxman@3'
  }
});
const mailOptions={
  from:'moviesnoweb@gmail.com',
  to:'rajatshinde100@gmail.com',
  subject:'Hey its for Reseting Password',
  text:'Hey Click here to Reseting Password'
}

transporter.sendMail(mailOptions,function(err, info){
  if(err){
    console.log(err);
  }else{
    console.log('Email has been Send', info.response);
  }
})
