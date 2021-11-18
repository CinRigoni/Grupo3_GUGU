'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relacion User-Address
      this.hasOne(models.Address,{
        foreignKey:'usersId'
      })
      //Relacion Rol-User
      this.belongsTo(models.Rol,{
        foreignKey:'rolesId'
      })
      //Relacion Order-User
      this.hasMany(models.Order, {
        foreignKey: 'usersId'
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    rolesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};