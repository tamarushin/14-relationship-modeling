'use strict';

//the job of the index.js file is:

//1.pulling in dependencies(code you are taking from somewhere else.)
//2.starting the server (open in browser)
//3.establish connection with data storage.

// Read in our environment variables
require('dotenv').config();

// Setup Transpilation
require('babel-register');

// Start up DB Server
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// Require our main app file and start the web server up
require('./api-server/src/app/app.js').start(process.env.PORT);
