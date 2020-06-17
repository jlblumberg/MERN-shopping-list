require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const config = require('./config/config');

// Connect to Mongo
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Mongo connected successfully to the ${process.env.NODE_ENV} database`))
  .catch(err => console.log(err));

app.use('/api/items', items);

const listen = app.listen(config.port, () => console.log(`Server started on port ${config.port}`));

app.port = listen.address().port;
module.exports = app;