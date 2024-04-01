import nodemailer from 'nodemailer';
import {NODE_MAILER_PASSWORD, EMAIL} from '../config/index.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: EMAIL,
      pass: NODE_MAILER_PASSWORD,
    },
});


export const mainMailer=async(toEmail, otp, userName)=>{
    if(!toEmail || !otp || !userName) return;
    const mjmlTemplate =  `<mjml>\n  <mj-body>\n    <mj-container>\n      <mj-section>\n        <mj-column>\n          <mj-text font-family=\"Arial, sans-serif\" color=\"#333\" font-size=\"24px\" align=\"center\" line-height=\"12px\">OTP Verification</mj-text>\n<mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\" line-height=\"15px\">&nbsp;</mj-text>\n          <mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\">Dear ${userName},</mj-text>\n          <mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\">Your One Time Password (OTP) for verification is: <strong>${otp}</strong></mj-text>\n          <mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\">Please use this OTP to complete the verification process.</mj-text>\n          \n          <mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\" line-height=\"22px\">&nbsp;</mj-text>\n          \n          <mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\">Thank you,</mj-text>\n<mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\" line-height=\"6px\">&nbsp;</mj-text>\n          <mj-text font-family=\"Arial, sans-serif\" color=\"#666\" font-size=\"16px\">Renteled.com</mj-text>\n        </mj-column>\n      </mj-section>\n    </mj-container>\n  </mj-body>\n</mjml>\n\n`

    try{
        // console.log(toEmail)
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Renteled.com" <${EMAIL}>`, // sender address
      to: toEmail, // list of receivers
      subject: "Your OTP for Verification", // Subject line
    //   text: "", // plain text body
      html: mjmlTemplate, // html body
    });

  
    // console.log("Message sent: %s", info.messageId);
    }catch(error){
        console.log('error while sending otp through node mailer is',error);
      // res.json(CustomErrorHandler.unableToSendOtp);
    }
}