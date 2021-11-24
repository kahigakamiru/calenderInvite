require('dotenv').config();
const nodemailer = require('nodemailer');
const messageObj = require('../helpers/messageObj');
const sourceEmail = 'kahigandegwa2244@gmail.com';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});
function verifySmtp(){
    // verify connection configuration
 transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready for emails');
    }
    return true;
});
}
verifySmtp(); 

const sendEmail = async(messageObj) => {

    let info = await transporter.sendMail(messageObj);
    console.log('serve');

}

module.exports = sendEmail;
