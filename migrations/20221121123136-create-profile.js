"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      isBabysitter: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      locationLongitude: {
        type: Sequelize.FLOAT,
      },
      locationLatitude: {
        type: Sequelize.FLOAT,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      hourlyRate: {
        type: Sequelize.FLOAT,
      },
      ageOfChildren: {
        type: Sequelize.INTEGER,
      },
      numberOfChildren: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profiles");
  },
};
