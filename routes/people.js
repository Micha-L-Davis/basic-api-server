'use strict';

const express = require('express');
// const validate = require('../src/middleware/validator.js');
const { PeopleModel } = require('../models');

const router = express.Router();

router.post('/people', /* validate, */ async (request, response, next) => {
  let newPersonData = request.body;

  let responseData = await PeopleModel.create(newPersonData);
  response.send(responseData);
});

router.get('/people', async (request, response, next) => {
  let peopleData = await PeopleModel.findAll();

  response.send(peopleData);
});

router.get('/people/:id', async (request, response, next) => {
  let peopleData = await PeopleModel.findAll({
    where: {
      id: request.params.id,
    },
  });

  response.send(peopleData);
});

router.delete('/people/:id', async (request, response, next) => {
  let deletedPerson = await PeopleModel.destroy({
    where: {
      id: request.params.id,
    },
  });
  console.log('Deleted person ', deletedPerson);
  response.json(deletedPerson);
});

router.put('/people/:id', async (request, response, next) => {
  let updatedPerson = await PeopleModel.update(request.body, {
    where: {
      id: request.params.id,
    },
  });

  console.log(updatedPerson);
  response.send(updatedPerson);
});

// GET, PUT/PATCH, DELETE

module.exports = router;
