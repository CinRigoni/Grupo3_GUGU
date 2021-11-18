'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stockMin: DataTypes.INTEGER,
    stockMax: DataTypes.INTEGER,
    description: DataTypes.STRING,
    weight: DataTypes.DECIMAL,
    dimensions: DataTypes.STRING,
    brandsId: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER,
    visibilitiesId: DataTypes.INTEGER,
    discountsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};