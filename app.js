const express = require('express');
const app = express();
const portNumber = 3000;

app.listen(portNumber, console.log(`Server is running on port ${portNumber}`));