const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config/env');
const router = express.Router();

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// FORM ROUTE
const form = require('./routes/form.routes');
app.use('/api/form', form);

app.get('/es/*', (req, res, next) => {
  res.sendFile('./public/es/index.html', {root: __dirname});
});

app.get('*', (req, res, next) => {
    res.sendFile('./public/index.html', {root: __dirname});
});

app.listen(8080, () => {
    console.log('Server listening on *:8080');
});