"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("protocol", "schoolsList");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("protocol", "schoolsList", {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: false,
    });
  },
};
