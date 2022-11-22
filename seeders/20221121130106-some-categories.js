"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "age",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gender",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "language",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "special needs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "school subjects",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
