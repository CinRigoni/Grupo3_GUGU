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
      //Relación Brand-Product
      this.belongsTo(models.Brand, {
        foreignKey: 'brandsId'
      })
      //Relación Category-Product
      this.belongsTo(models.Category, {
        foreignKey: 'categoriesId'
      })
      //Relación Discount-Product
      this.belongsTo(models.Category, {
        foreignKey: 'discountsId'
      })
      //Relación Visibility-Product
      this.belongsTo(models.Visibility, {
        foreignKey: 'visibilitiesId'
      })
      //Relación Product-Image
      this.hasMany(models.Image, {
        foreignKey: 'productsId'
      })
      //Relación Product-OrderDetail
      this.hasMany(models.OrderDetail, {
        foreignKey: 'ordersId'
      })
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