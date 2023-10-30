'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bussnies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bussnies.belongsToMany(models.Categories, {
        through: 'Category_bussnies',
        foreignKey: 'bussnies_id',
        otherKey: 'category_id'
      })
      Bussnies.belongsToMany(models.Attributes, {
        through: 'Attribute_bussnies',
        foreignKey: 'bussnies_id',
        otherKey: 'attirbute_id'
      });

      Bussnies.hasOne(models.Location, {
        foreignKey: 'bussnies_id',
      });

      Bussnies.hasMany(models.Opentime, {
        foreignKey: 'bussnies_id',
      });
    }
  }
  Bussnies.init({
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    image: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bussnies',
  });
  return Bussnies;
};