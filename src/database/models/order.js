'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relacion Order-User
      this.belongsTo(models.User,{
        foreignKey:'usersId'
      })
      //Relación Payment-Order
      this.belongsTo(models.Payment, {
        foreignKey: 'paymentsId'
      })
      //Relación Status-Order
      this.belongsTo(models.Status, {
        foreignKey: 'statussesId'
      })
      //Relación Shipping-Order
      this.hasOne(models.Shipping, {
        foreignKey: 'ordersId'
      })
      //Relación Order-OrderDetail
      this.hasMany(models.OrderDetail, {
        foreignKey: 'ordersId'
      })
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    usersId: DataTypes.INTEGER,
    statussesId: DataTypes.INTEGER,
    paymentsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};