const User = require ("../models/user");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

// _____ REGISTER _____
const register = async (req, res) => {
    try {
        let {firstName, surname, email, phone, password, password2} = req.body;
        if (!firstName || !surname || !email || !phone || !password || !password2)
        return res.send ({msg: "All information are required in process of registration", status: false});

        let oldUser = await User.findOne({email});
        if (oldUser)
        return res.send({msg: "User is already registered, please login or sign up with new email."});
        let hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            firstName,
            surname,
            email,
            phone,
            password: hashedPassword,
            password2: hashedPassword
        });
            return res.send({msg: "Registered successfully", status: true});
        } catch (error) {  
            return res.status(500).send({msg:"Internal server error", error, status: false})
    }
};

// _____ LOGIN _____
const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        if (!email || !password) {
        return res.send ({msg: "Email and password are required for login."});
        }

        let doesUserExist = await User.findOne({email});
        if (!doesUserExist) {
            return res.send ({msg: "User is not registered."});
        }
        let isPasswordValid = await bcrypt.compare (password, doesUserExist.password);
        if (!isPasswordValid) {
            return res.send ({msg: "Password is invalid."});
        }

        // after verification of password validity, token needs to be generated 

        let payload = {
            userId: doesUserExist._id,
            email: doesUserExist.email,
        }

        let token = await jwt.sign(payload,"diana@123456789");
        return res.send({msg: "Login successfully", token});
    } catch (error) {
        return res.status(500).send({msg:"Internal server error", error});
    }
};


const getUserById = async (req, res) => {
    try {
        let user = await User.findOne({_id: req.params.id});
        return res.send(user);
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"User can not be found", error})
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


module.exports = {register, login, getUserById, updateUser, deleteUser};