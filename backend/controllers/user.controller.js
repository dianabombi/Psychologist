const User = require ("../models/user");

const getUserById = async (req, res) => {
    try {
        let user = await User.findOne({_id: req.params.id});
        return res.send(user);
    } catch (error) {
        return res.status(500).send({msg:"User can not be found", error})
        }
    };

const createUser = async (req, res) => {
    try {
        let newUser = req.body;
        await User.create (newUser);
        return res.send({msg: "User has been created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"User can not be created", error})
        }
    };

const updateUser = async (req, res) => {
    try {
        let newValue = req.body;
        let id = req.params.id;

        let isUserFound = await User.findOne({_id: id});
        if (!isUserFound) return res.send({msg: "User is not found."});

        let updatedUser = await User.findByIdAndUpdate (id, newValue);
        return res.send({msg: "User has been updated successfully.", updatedUser});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"User can not be shown", error})
        }
    };

const deleteUser = async (req, res) => {
     try {
        let id = req.params.id;
        
        let isUserFound = await User.findOne({_id: id});
        if (!isUserFound) return res.send({msg: "User is not found."});

        let deletedUser = await User.findByIdAndDelete (id);
        return res.send({msg: "User has been deleted successfully.", deletedUser});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"User can not be deleted", error})
        }
    };


module.exports = {getUserById, createUser, updateUser, deleteUser};