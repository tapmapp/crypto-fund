const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// MODELS
const Form = require('../../models/form.model');
const Subscribe = require('../../models/subscribe.model');

// ADD MESSAGE
router.post('/send-message', (req, res, next) => {
  
  const body = req.body;

  // VALIDATION FIELDS & DYNAMIC INJECTIONS

  // SAVE ON DB
  const message = Form.schema.methods.addMessage(body.name, body.email, body.phone, body.referal, body.message);
  message.then(data => res.status(200).json(data), err => res.status(500).json(err));

  // SEND EMAIL

});

// ADD MESSAGE
router.post('/subscribe', (req, res, next) => {
  
  const body = req.body;

  // VALIDATION FIELDS & DYNAMIC INJECTIONS

  // SAVE ON DB
  const subscriber = Subscribe.schema.methods.subscribe(body.email);
  subscriber.then(data => res.status(200).json(data), err => res.status(500).json(err));

  // SEND EMAIL

});

module.exports = router;