const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
/*the user's inputs are obtained from the req.body 
in the code below, and you then check the email to make sure no past registrations have been made. 
We'll use the values obtained from req.body to create the new user after that has occurred. */
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    //secretOrPrivateKey is the secret key that will be used to sign the JWT and must have a value  
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
// Importing necessary modules and dependencies
module.exports.Login = async (req, res, next) => {
  try {
    // Extracting email and password from request body
    const { email, password } = req.body;

    // Checking if email or password is missing
    if (!email || !password) {
      // Returning response with message if any field is missing
      return res.json({ message: 'All fields are required' });
    }

    // Finding user by email in the database
    const user = await User.findOne({ email });

    // Checking if user exists
    if (!user) {
      // Returning response with message if user does not exist
      return res.json({ message: 'Incorrect password or email' });
    }

    // Comparing provided password with user's password in the database
    const auth = await bcrypt.compare(password, user.password);

    // Checking if password is incorrect
    if (!auth) {
      // Returning response with message if password is incorrect
      return res.json({ message: 'Incorrect password or email' });
    }

    // Creating a token for user authentication
    const token = createSecretToken(user._id);

    // Setting the token as a cookie in the response
    res.cookie("token", token, {
      withCredentials: true, // Sending credentials with the cookie
      httpOnly: false, // Allowing client-side JavaScript to access the cookie
    });

    // Returning success response with message after successful login
    res.status(201).json({ message: "User logged in successfully", success: true });

    // Calling next middleware function
    next();
  } catch (error) {
    // Handling any errors that occur during the login process
    console.error(error);
  }
}