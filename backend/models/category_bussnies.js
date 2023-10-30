'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_bussnies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category_bussnies.init({
    category_id: DataTypes.INTEGER,
    bussnies_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category_bussnies',
  });
  return Category_bussnies;
};