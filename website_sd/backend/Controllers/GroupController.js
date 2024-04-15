const Group = require('../Models/GroupModel');
const User = require('../Models/UserModel');

// Import necessary modules and models

// Controller methods for handling group operations
const GroupsController = {
    // Create a new group
    createGroup: async (req, res) => {
        try {
            const {name, description} = req.body;
            // Get the owner's user ID from the request body
            const ownerId = req.user._id;
            

            const group = await Group.create({
                name,
                description,
                owner: ownerId,
                members: ownerId
            });
            
                    
            

            // Return the created group
            res.status(201).json({message: 'Group created successfully', success: true, group});
        } catch (error) {
            // Handle any errors
            res.status(500).json({ error: 'Failed to create group' });
        }
    },

    // Get all users in a group
    getUsersInGroup: async (req, res) => {
        try {
            // Get the group ID from the request parameters
            const { groupId } = req.params;
            //console.log(groupId);

            // Find the group by ID and populate the 'users' field
            const group = await Group.findById(groupId).populate('members');

            // Return the users in the group
           return res.json(group.members);
        } catch (error) {
            // Handle any errors
            res.status(500).json({ error: 'Failed to get users in group' });
        }
    },

    // Add a user to a group
    addUserToGroup: async (req, res) => {
    try {
        const { userId, groupId } = req.body;
        const ownerId = req.user._id;

        const user = await User.findById(userId);
        const group = await Group.findById(groupId);
        if(!user || !group){
            return res.status(404).json({message: 'User or group not found'});
        }
        if(group.members.includes(userId)){
            return res.status(400).json({message: 'User is already in the group'});
        }
        group.members.push(userId); // Push to 'members', not 'users'

        await group.save();

        return res.json(group);
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: 'Failed to add user to group' });
    }
    },
    

    // Remove a user from a group
    removeUserFromGroup: async (req, res) => {
        try {
            const { userId, groupId } = req.body;
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).json({message: 'User not found'});
            }
    
            const group = await Group.findById(groupId);
            if(!group || !group.members.includes(userId)){
                return res.status(400).json({message: 'User is not a part of this group, thus they can not be removed.'});
            }
    
            const updatedGroup = await Group.findByIdAndUpdate(groupId, {
                $pull: { members: userId },
            }, { new: true });
    
            return res.json(updatedGroup);
        } catch (error) {
            console.error(error); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to remove user from group' });
        }
    },

    updateGroupDetails: async (req, res) => {
        try {
            const { groupId } = req.params;
            const { name, description } = req.body;
    
            const group = await Group.findByIdAndUpdate(groupId, { name, description }, { new: true });
    
            return res.json(group);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update group details' });
        }
    },
    
    // Get group details
    getGroupDetails: async (req, res) => {
        try {
            const { groupId } = req.params;
            
            const group = await Group.findById(groupId);
            if(!group){
                return res.status(404).json({message: 'Group not found'});
            }
    
            res.json(group);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get group details' });
        }
    },
    
    // Delete group
    deleteGroup: async (req, res) => {
        try {
            const { groupId } = req.params;
    
            await Group.findByIdAndDelete(groupId);
    
            return res.json({ message: 'Group deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete group' });
        }
    },
    
    
    
    // Get groups of a user
    getGroupsOfUser: async (req, res) => {
        try {
            const { userId } = req.params;
    
            const groups = await Group.find({ users: userId });
    
            res.json(groups);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get groups of user' });
        }
    },

};

module.exports = GroupsController;