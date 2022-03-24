'use strict';

const express = require('express');
//const validate = require('../src/middleware/validator.js');
const { PlacesModel } = require('../models');

const router = express.Router();

router.post('/places', /* validate, */ async (request, response, next) => {
  let newPlaceData = request.body;

  let responseData = await PlacesModel.create(newPlaceData);
  response.send(responseData);
});

router.get('/places', async (request, response, next) => {
  let placeData = await PlacesModel.findAll();

  response.send(placeData);
});

router.get('/places/:id', async (request, response, next) => {
  let placesData = await PlacesModel.findAll({
    where: {
      id: request.params.id,
    },
  });
  response.send(placesData);
});

router.delete('/places/:id', async (request, response, next) => {
  let deletedPlace = await PlacesModel.destroy({
    where: {
      id: request.params.id,
    },
  });
  response.json(deletedPlace);
});

router.put('/places/:id', async (request, response, next) => {
  let updatedPlace = await PlacesModel.update(request.body, {
    where: {
      id: request.params.id,
    },
  });

  response.send(updatedPlace);
});

// GET, PUT/PATCH, DELETE

module.exports = router;
