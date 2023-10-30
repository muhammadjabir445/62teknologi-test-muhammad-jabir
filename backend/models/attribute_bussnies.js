'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribute_bussnies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attribute_bussnies.init({
    attirbute_id: DataTypes.INTEGER,
    bussnies_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attribute_bussnies',
  });
  return Attribute_bussnies;
};