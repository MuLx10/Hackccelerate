const express =  require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.route');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/learningApp')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Database connection failed');
  });

app.use(passport.initialize());
app.use((req, res, next) => {
  console.log('middleware!');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/user', authRoutes);

module.exports = app;
