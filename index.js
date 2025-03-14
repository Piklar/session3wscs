// integrate express and mongoose
const express = require('express');
const mongoose = require('mongoose');

//Allows us to use all routes from bookRoutes
const bookRoutes = require("./routes/bookRoutes.js");

// Server name => server
const server = express();
const port = 3000;

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/books");

let db = mongoose.connection;

// error -> event to expect when trying to connect
db.on("error", console.error.bind(console, "ERROR: Cannot connect to the server."));

// Check connection if sucessful
// open -> event to expect when try
mongoose.connection.once("open", () => console.log(`MongoDB connection is successful.`));

// Add the task route 
server.use("/books", bookRoutes);

server.listen(port, () => console.log(`Server is now running at port ${port}.`));