const express =  require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/learningApp')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Database connection failed');
  });

module.exports = app;
