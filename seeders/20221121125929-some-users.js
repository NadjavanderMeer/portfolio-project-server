"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Xiaodan",
          password: "xiaodan",
          email: "xiaodan@xiaodan.com",
          isBabysitter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agnieszka",
          password: "agnieszka",
          email: "agnieszka@agnieszka.com",
          isBabysitter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nadja",
          password: "nadja",
          email: "nadja@nadja.com",
          isBabysitter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nigel",
          password: "nigel",
          email: "nigel@nigel.com",
          isBabysitter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
