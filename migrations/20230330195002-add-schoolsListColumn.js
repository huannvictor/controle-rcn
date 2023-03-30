"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("protocol", "schoolsList", {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("protocol", "schoolsList");
  },
};
