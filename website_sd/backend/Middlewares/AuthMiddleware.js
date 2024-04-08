const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Defining a middleware function to verify user authentication
module.exports.userVerification = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        console.log("Token is missing");
        return res.status(401).json({ message: "Authentication token is missing" });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            return res.status(403).json({ message: "Invalid authentication token" });
        } else {
            const user = await User.findById(decodedToken.id);
            if (user) {
                req.user = user; // Attach the entire user object to req
                res.json({ status: true, user: user.username });
                // console.log(req.user);
                next(); // Pass control to the next handler
            } else {
                return res.status(404).json({ message: "User not found" });
            }
        }
    });
};
