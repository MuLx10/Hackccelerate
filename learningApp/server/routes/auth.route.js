const express = require('express');
const asyncHandler = require('express-async-handler')
const passport = require('passport');
const passportConfig = require('../config/passport')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require('../models/user.model');
const router = express.Router();
module.exports = router;

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        hashedPassword: hash
      });
      user.save()
        .then((result) => {
          res.status(201).json({
            message: 'User is created!',
            result: result
          });
        })
        .catch(err => {
          console.log('user not created!');
          res.status(500).json({
            error: err
          });
        });
    });
});
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/loggedIn', passport.authenticate('jwt', { session: false }), login);

function login(req, res) {
  console.log('***************' + req.user);
  let user = req.user;
  let token = jwt.sign(
    {email: user.email, userId: user._id},
    'hackccelerate_2020_theme2_learning_app',
    {expiresIn: '1h'}
  );
  res.json({ user, token });
}
