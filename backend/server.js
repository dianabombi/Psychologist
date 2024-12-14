// Building server

const express = require('express');
const app = express();
const cors = require("cors");
const connection = require ("./databaseConnection"); // initialize app
const userRoutes = require ("./routes/user.routes");
const port = 8000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});