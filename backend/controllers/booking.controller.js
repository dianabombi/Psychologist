const Booking = require("../models/booking");

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        // Format bookings for FullCalendar
        const formattedBookings = bookings.map(booking => ({
            title: `Session with ${booking.name}`,
            start: booking.date, // ISO format works well for FullCalendar
            end: new Date(new Date(booking.date).getTime() + booking.duration * 60000), // Calculate end time
        }));

        res.json(formattedBookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createBooking = async (req, res) => {
    const { name, email, date, time, duration } = req.body;

    try {
        // Create a new booking
        const newBooking = new Booking({
            name,
            email,
            date,
            time,
            duration,
        });

        // Save to the database
        await newBooking.save();

        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getBookings, createBooking };
