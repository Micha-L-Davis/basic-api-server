'use strict';

const express = require('express');
const validate = require('../src/middleware/validator.js');
const { PeopleModel } = require('../models');

const router = express.Router();

router.post('/people', validate, async (request, response, next) => {
  let newPersonData = request.body;

  let responseData = await PeopleModel.create(newPersonData);
  response.send(responseData);
});

// GET, PUT/PATCH, DELETE

module.exports = router;
