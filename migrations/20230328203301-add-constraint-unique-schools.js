"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("schools", {
      fields: ["code"],
      type: "unique",
      name: "unique_code",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("schools", "unique_code");
  },
};
