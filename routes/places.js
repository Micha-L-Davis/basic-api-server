'use strict';

const express = require('express');
const validate = require('../src/middleware/validator.js');
const { PlacesModel } = require('../models');

const router = express.Router();

router.post('/places', validate, async (request, response, next) => {
  let newPlaceData = request.body;

  let responseData = await PlacesModel.create(newPlaceData);
  response.send(responseData);
});

// GET, PUT/PATCH, DELETE

module.exports = router;
