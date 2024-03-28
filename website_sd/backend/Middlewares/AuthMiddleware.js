const User = require("../Models/UserModel"); 
require("dotenv").config(); 
const jwt = require("jsonwebtoken"); 

// Defining a middleware function to verify user authentication
module.exports.userVerification = (req, res) => {
  // Retrieving the token from cookies in the request
  const token = req.cookies.token;
//   console.log(token);

  // Checking if token exists
  if (!token) {
    // Returning response with status false if token is missing
    console.log("Token is missing");
    return res.json({ status: false });
  }

  // Verifying the token with the secret key asynchronously
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    // Handling error if token verification fails
    if (err) {
      // Returning response with status false if token verification fails
      console.log(err.message);
      return res.json({ status: false });
    } else {
      // If token verification is successful, find the user by id in the database
      const user = await User.findById(data.id);

      // Checking if user exists
      if (user) {
        // Returning response with status true and user details if user exists
        return res.json({ status: true, user: user.username });
      } else {
        // Returning response with status false if user does not exist
        return res.json({ status: false });
      }
    }
  });
};
