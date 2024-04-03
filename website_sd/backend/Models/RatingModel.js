const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    ratingValue: Number, // The actual rating
    reviewer: { // The user who is giving the rating
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Reviewer ID is required']
    },
    reviewee: { // The user who is being rated
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Reviewee ID is required']
    },
    comment: String, // Optional, for additional feedback
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Rating', ratingSchema);
