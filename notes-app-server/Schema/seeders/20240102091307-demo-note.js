"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "John Doe",
          content: "BetaMember",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mario Doe",
          content: "JoshuaMember",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notes", null, {});
  },
};
