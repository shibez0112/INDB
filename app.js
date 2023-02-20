const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const portNumber = 3000;

// Connect to database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true}, () =>{
    console.log("Connected to database");
});


// Router define
const movieRouter = require("./routes/movie");
const personRouter = require("./routes/person");

// Middleware
app.use(express.json());

//Routes
app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/person", personRouter);

app.listen(portNumber, console.log(`Server is running on port ${portNumber}`));

module.exports = app;
