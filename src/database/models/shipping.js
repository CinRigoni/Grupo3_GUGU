'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relación Shipping-Order
      this.belongsTo(models.Order, {
        foreignKey: 'ordersId'
      })
    }
  };
  Shipping.init({
    price: DataTypes.DECIMAL,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    apartment: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    country: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    ordersId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};