const HTMLParser = require('node-html-parser');
const nodemailer = require('nodemailer');
const os = require('os');

const template = require('./email-templates/email-en');

let mailerConfig = {
    host: os.hostname(),
    port: 25,
};

const emailBody = HTMLParser.parse(template);

let transporter = nodemailer.createTransport(mailerConfig);
transporter.sendMail({
    from: 'contact@consultacrypto.com',
    to: 'contact@consultacrypto.com',
    subject: 'Consulta Crypto message',
    html: emailBody.toString()
}, (err, info) => {
    console.log(info);
    console.log(err);
});