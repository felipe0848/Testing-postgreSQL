"use strict";

// @type {import('sequelize-cli').Migration}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("planets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createAt: {
        type: Sequelize.DATE,
      },
      updateAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("planets");
  },
};
