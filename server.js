require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const config = require('./config/config');

// Connect to Mongo
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo connected successfully"))
  .catch(err => console.log(err));

const listen = app.listen(config.port, () => console.log(`Server started on port ${config.port}`));

module.exports = app;
module.exports.port = listen.address().port;