"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Xiaodan",
          password: bcrypt.hashSync("xiaodan", 10),
          email: "xiaodan@xiaodan.com",
          isBabysitter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agnieszka",
          password: bcrypt.hashSync("agnieszka", 10),
          email: "agnieszka@agnieszka.com",
          isBabysitter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nadja",
          password: bcrypt.hashSync("nadja", 10),
          email: "nadja@nadja.com",
          isBabysitter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nigel",
          password: bcrypt.hashSync("nigel", 10),
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
