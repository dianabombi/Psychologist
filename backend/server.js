// Building server

const express = require('express');
const app = express();
const cors = require("cors");
const connection = require ("./databaseConnection"); 
require('dotenv').config();



const userRoutes = require ("./routes/user.routes");
const blogRoutes = require ("./routes/blog.routes");
const diaryRoutes = require ("./routes/diary.routes");
const contactRoutes = require ("./routes/contact.routes");
const bookingRoutes = require ("./routes/booking.routes");
const adminRoutes = require ("./routes/admin.routes");
const sessionRoutes = require("./routes/session.routes")

const port = 8000;

// middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// routes
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/diary", diaryRoutes);
app.use("/contactForm", contactRoutes);
app.use("/bookings",bookingRoutes);
app.use("/admin", adminRoutes);
app.use('/api', sessionRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});