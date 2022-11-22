"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          isBabysitter: true,
          name: "Xiaodan",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          hourlyRate: 9.5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isBabysitter: false,
          name: "Agnieszka",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isBabysitter: false,
          name: "Nadja",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isBabysitter: true,
          name: "Nigel",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          hourlyRate: 11.0,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
