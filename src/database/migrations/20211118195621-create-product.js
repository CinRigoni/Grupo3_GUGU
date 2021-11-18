'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stockMin: {
        type: Sequelize.INTEGER
      },
      stockMax: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      dimensions: {
        type: Sequelize.STRING
      },
      brandsId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'brands',
          key: 'id'
        }
      },
      categoriesId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'categories',
          key: 'id'
        }
      },
      visibilitiesId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'visibilities',
          key: 'id'
        }
      },
      discountsId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'discounts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};