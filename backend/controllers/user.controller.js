const User = require ("../models/user");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const sendEmail = require('./mailgun.js');


// _____ REGISTER _____
const register = async (req, res) => {
    try {
        const { firstName, surname, email, phone, password, role } = req.body;

        if (!firstName || !surname || !email || !phone || !password) {
            console.error("Missing Fields:", { firstName, surname, email, phone, role });
            return res.status(400).send({ msg: "Please fill out all required fields.", status: false });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({ msg: "Invalid email format.", status: false });
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).send({ 
                msg: "User is already registered, please login or sign up with a different email.", 
                status: false 
            });
        }

        const allowedRoles = ['user', 'admin']; // roles for users
        const userRole = allowedRoles.includes(role) ? role : 'user';

        const saltRounds = Number.isInteger(parseInt(process.env.SALT_ROUND, 10)) ? parseInt(process.env.SALT_ROUND, 10) : 10;
        if (!process.env.SALT_ROUND) console.warn("SALT_ROUND not set. Defaulting to 10.");
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let payload = {
            firstName,
            surname,
            email,
            phone,
            password: hashedPassword,
            role: userRole,
        };

        await User.create(payload); // saving user to database

        return res.status(201).send({ msg: "Registered successfully", status: true });
    } catch (error) {
        console.error("Error during registration:", error.message);
        return res.status(500).send({ msg: "Internal server error", status: false });
    }
};

// _____ LOGIN _____
const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({msg: "Email and password are required for login."});
        }

        let doesUserExist = await User.findOne({email});
        if (!doesUserExist) {
            return res.status(404).json({msg: "User is not registered."});
        }

        let isPasswordValid = await bcrypt.compare(password, doesUserExist.password);
        if (!isPasswordValid) {
            return res.status(400).json({msg: "Password is invalid."});
        }

        // After verification of password validity, generate the token
        const payload = {
            userId: doesUserExist._id,
            email: doesUserExist.email,
            role: doesUserExist.role
        };

        let token = jwt.sign (
            payload, 
            process.env.SECRET_KEY, 
            { expiresIn: '1h' }
        );

        return res.status(200).json({msg: "Login successful",  role: doesUserExist.role, token, status: true});
    } catch (error) {
        console.error(error); // Add logging to catch errors
        return res.status(500).json({msg: "Internal server error", error: error.message});
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