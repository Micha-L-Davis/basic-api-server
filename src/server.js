'use strict';

const logRoute = require('./middleware/logger.js');
const placesRouter = require('../routes/places.js');
const peopleRouter = require('../routes/people.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const express = require('express');
const app = express();

app.use(express.json());

app.use(logRoute);

app.use(peopleRouter);
app.use(placesRouter);

app.use(error404);
app.use(error500);

module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
};
