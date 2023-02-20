const express = require('express');
const app = express();

const portNumber = 3000;

const movieRouter = require('./routes/movie');

// Middleware
app.use(express.json());

//Routes
app.use('/api/v1/movies', movieRouter);


app.listen(portNumber, console.log(`Server is running on port ${portNumber}`));

module.exports = app;