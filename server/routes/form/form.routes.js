const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const os = require('os');

const template = require('./email-templates/email-en');

let mailerConfig = {
  host: os.hostname(),
  port: 25,
};

let transporter = nodemailer.createTransport(mailerConfig);

// MODELS
const Form = require('../../models/form.model');
const Subscribe = require('../../models/subscribe.model');

// ADD MESSAGE
router.post('/send-message', (req, res, next) => {
  
  const body = req.body;

  // VALIDATION FIELDS & DYNAMIC INJECTIONS

  // SAVE ON DB
  const message = Form.schema.methods.addMessage(body.name, body.email, body.phone, body.referal, body.message);
  message.then(data => {

    const emailBody = HTMLParser.parse(template);

    transporter.sendMail({
      from: 'contact@consultacrypto.com',
      to: `${body.email}, contact@consultacrypto.com`,
      subject: 'Consulta Crypto - Thank you for your message!',
      html: emailBody.toString()
    }, (err, info) => {
      console.log(info);
      console.log(err);
    });

    res.status(200).json(data);
    
  }, err => {

    res.status(500).json(err);
  
  });

});

// ADD MESSAGE
router.post('/subscribe', (req, res, next) => {
  
  const body = req.body;

  // VALIDATION FIELDS & DYNAMIC INJECTIONS

  // SAVE ON DB
  const subscriber = Subscribe.schema.methods.subscribe(body.subscriber);
  subscriber.then(data => {

    const emailBody = HTMLParser.parse(template);

    transporter.sendMail({
      from: 'contact@consultacrypto.com',
      to: `${body.subscriber}, contact@consultacrypto.com`,
      subject: 'Consulta Crypto - Thank you for subscribing!',
      html: emailBody.toString()
    }, (err, info) => {

      console.log(info);
      console.log(err);

      res.status(500).json(err);

    });

    res.status(200).json(data);

  }, err => {

    res.status(500).json(err);

  });

});

module.exports = router;