"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [
        { name: "weekend", createdAt: new Date(), updatedAt: new Date() },
        { name: "morning", createdAt: new Date(), updatedAt: new Date() },
        { name: "afternoon", createdAt: new Date(), updatedAt: new Date() },
        { name: "evening", createdAt: new Date(), updatedAt: new Date() },
        { name: "entire day", createdAt: new Date(), updatedAt: new Date() },
        { name: "recurring job", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
