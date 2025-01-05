const Booking = require ("../models/booking");

const confirmBooking = async (req, res) => {
    try {
        let id = req.params.id;
        let confirmation = await Booking.findOne({_id: id});
        return res.send(confirmation);
    } catch (error) {
        return res.status(500).send({msg:"Booking can not be found", error})
    }
};

const createTimeSlot = async (req, res) => {
    try {
        let newTimeSlot = req.body;
        await Booking.create (newTimeSlot);
        return res.send({msg: "Time slot has been created successfully"}); 
    } catch (error) {
        return res.status(500).send({msg:"Time slot can not be created", error})
    }
};

const getAdminProfile = async (req, res) => {
    try {
        // Assuming admin data is stored in req.user by middleware
        if (req.user.role !== "admin") {
            return res.status(403).send({ msg: "Access denied: Admins only" });
        }

        return res.status(200).send({ msg: "Welcome to the Admin Profile", user: req.user });
    } catch (error) {
        return res.status(500).send({ msg: "An error occurred while fetching admin profile", error });
    }
};


module.exports = {confirmBooking, createTimeSlot, getAdminProfile };