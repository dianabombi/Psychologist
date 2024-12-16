const Booking = require ("../models/booking");

const createBooking = async (req, res) => {
    try {
        let {name, email, date, time}=  req.body;
        if (!name || !email || !date || !time) 
        return res.send ({msg: "For booking, all information are required.", status: false});
        
        await Booking.create ({
            name,
            email, 
            date,
            time
        })
    } catch (error) {
        return res.status(500).send({msg:"Booking was not possible", error})
    }
};

module.exports = {createBooking};