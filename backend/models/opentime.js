'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opentime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Opentime.init({
    day: DataTypes.INTEGER,
    open_at: DataTypes.TIME,
    close_at: DataTypes.TIME,
    bussnies_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Opentime',
  });
  return Opentime;
};