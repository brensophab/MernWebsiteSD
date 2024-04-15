const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");
const { createGroup, getUsersInGroup, addUserToGroup, deleteGroup, removeUserFromGroup, 
    updateGroupDetails, getGroupDetails } = require("../Controllers/GroupController");

router.post("/create-group", userVerification, createGroup);
router.get("/:groupId/users", userVerification, getUsersInGroup);
router.post("/add-user", userVerification, addUserToGroup);
router.post("/remove-user", userVerification, removeUserFromGroup);
router.delete("/:groupId", userVerification, deleteGroup);
router.put("/:groupId", userVerification, updateGroupDetails);
router.get("/:groupId", userVerification, getGroupDetails);


module.exports = router;