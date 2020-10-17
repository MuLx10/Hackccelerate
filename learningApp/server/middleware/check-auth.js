const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'hackccelerate_2020_theme2_learning_app');
    next();
  } catch(error) {
    res.status(401).json({message: 'Auth failed!'});
  }

};
