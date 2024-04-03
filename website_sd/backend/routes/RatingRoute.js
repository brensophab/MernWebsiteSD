const router = require("express").Router();
const { createRating, getRatingsForUser, updateRating, deleteRating } = require('../Controllers/RatingController');
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post('/',  userVerification, createRating);
router.get('/:userId',  userVerification, getRatingsForUser);
router.put('/:ratingId',  userVerification, updateRating);
router.delete('/:ratingId', userVerification, deleteRating);

module.exports = router;
