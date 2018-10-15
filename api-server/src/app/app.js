'use strict';

// 3rd Party Libraries
import express from 'express';
import morgan from 'morgan';

import router from '../api/api';

import errorHandler from '../middleware/error.js';
import notFound from '../middleware/404.js';

let app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(router);

app.use(notFound);
app.use(errorHandler);

let server = false;

module.exports = {
  start: (port) => {
    if (!server) {
      server = app.listen(port, (err) => {
        if (err) { throw err; }
        console.log(`Server up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close(() => {
      console.log('Server has been stopped');
    });
  },
};