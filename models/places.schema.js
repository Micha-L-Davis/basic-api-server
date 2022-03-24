'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('places', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    county: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
