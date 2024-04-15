const Rating = require('../Models/RatingModel'); // Import the Rating model
const User = require('../Models/UserModel'); // Import the User model


// Create a new rating
module.exports.createRating = async (req, res) => {
    try {
        const { ratingValue, usernameBeingRated, comment } = req.body;
        const reviewerId = req.user._id; // Get the reviewer's ID from the user object

        // Check if the user being rated exists by their username
        const reviewee = await User.findOne({ username: usernameBeingRated });
        if (!reviewee) {
            return res.status(404).json({ message: 'User to be rated not found.' });
        }

        // Prevent user from rating themselves
        if (reviewerId.toString() === reviewee._id.toString()) {
            return res.status(400).json({ message: "Users can't rate themselves." });
        }

        const rating = await Rating.create({
            ratingValue,
            reviewer: reviewerId,
            reviewee: reviewee._id, // Use the _id of the found user
            comment
        });

       return res.status(201).json({ message: "Rating created successfully!", success: true, rating });
    } catch (error) {
        
      return  res.status(500).json({ message: error.message });
    }
};


// Get all ratings for a specific user
module.exports.getRatingsForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ratings = await Rating.find({ reviewee: userId }).populate('reviewer', 'username');
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a rating
module.exports.updateRating = async (req, res) => {
    try {
        const { ratingId } = req.params;
        const { ratingValue, comment } = req.body;
        const userId = req.user._id; // Assuming user ID is stored in req.user

        const rating = await Rating.findById(ratingId);

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found.' });
        }

        if (rating.reviewer.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'You can only update your own ratings.' });
        }

        rating.ratingValue = ratingValue;
        if (comment) rating.comment = comment;

        await rating.save();
        res.json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a rating
module.exports.deleteRating = async (req, res) => {
    try {
        const { ratingId } = req.params;
        const userId = req.user._id; // Assuming user ID is stored in req.user

        const rating = await Rating.findById(ratingId);

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found.' });
        }

        if (rating.reviewer.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'You can only delete your own ratings.' });
        }

        await rating.remove();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
