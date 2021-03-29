const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config/env');
const router = express.Router();

const PORT = process.env.PORT || config.PORT;
process.env.SECRET = config.SECRET;

const dbUrl = 'mongodb+srv://elAmerican86:ew7cyPjfHqQVzGu@consultacrypto.jcc94.mongodb.net/ConsultaCrypto';

// DATA BASE CONNECTION
const mongoose = require('mongoose');
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// APP INITIALIZATION
const app = express();

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

// SUBSCRIBE ROUTE
const subscribe = require('./routes/form.routes');
app.use('/api/form', form);


// ERROR HANDLER
app.use((err, req, res) => {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // RENDER ERROR PAGE
  res.status(err.status || 500);
  res.render('error');

});

app.listen(8080, () => {
  console.log('Server listening on *:8000');
});
