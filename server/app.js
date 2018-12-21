const express = require('express');

const path = require('path');

// MIDDLEWARE
const parser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(parser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/public')));

module.exports = app;
