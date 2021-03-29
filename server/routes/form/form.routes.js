const express = require('express');
const router = express.Router();

// MODELS
const Form = require('../../models/form/form.model');

// GET MESSAGES
router.get('/', (req, res, next) => {

  const form = Form.schema.methods.getMessages();
  form.then(data => res.status(200).json(data), err => res.status(500).json(err));

});

// ADD MESSAGE
router.post('/send-message', (req, res, next) => {
  
  const body = req.body;

  // VALIDATION FIELDS & DYNAMIC INJECTIONS

  // SAVE ON DB
  const message = Form.schema.methods.addMessage(body.name, body.email, body.phone, body.referal, body.message);
  message.then(data => res.status(200).json(data), err => res.status(500).json(err));

  // SEND EMAIL

});

module.exports = router;