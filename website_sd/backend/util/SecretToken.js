const dotenv = require('dotenv');
dotenv.config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  //console log the id to see what it looks like
  // console.log(id);
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};