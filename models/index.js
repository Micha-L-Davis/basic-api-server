'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const peopleSchema = require('./people.schema.js');
const placesSchema = require('./places.schema.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite::memory' :
  process.env.DATABASE_URL || 'postgresql://localhost:5432/api-app';

const sequelize = new Sequelize(DATABASE_URL);
const PeopleModel = peopleSchema(sequelize, DataTypes);
const PlacesModel = placesSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  PeopleModel,
  PlacesModel,
};
