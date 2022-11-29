"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          isBabysitter: true,
          locationLatitude: 52.363272769014266,
          locationLongitude: 4.924166604355596,
          name: "Xiaodan",
          imageUrl:
            "https://pps.whatsapp.net/v/t61.24694-24/264150822_3139905243004420_3927579938279627059_n.jpg?ccb=11-4&oh=01_AdRKMtSmSrztkO6SrTQgQuMSpN4iN8Zf-Zv6JVoYNCq5XA&oe=6391C638",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          hourlyRate: 9.5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isBabysitter: false,
          locationLatitude: 52.372537821828416,
          locationLongitude: 4.862135381285493,
          name: "Agnieszka",
          imageUrl:
            "https://ca.slack-edge.com/T0DK39WAJ-U03H9HWB71Q-b62510f891e3-512",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isBabysitter: false,
          locationLatitude: 52.359805261647814,
          locationLongitude: 4.92690029953553,
          name: "Nadja",
          imageUrl:
            "https://ca.slack-edge.com/T0DK39WAJ-U03NBCKAVKM-d7e0374d3a07-512",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum ligula, id pulvinar nunc. Etiam porta sit amet ipsum id dignissim. Curabitur dapibus porttitor nulla vel aliquet. Fusce luctus erat vitae consectetur ornare. Aliquam ac tempus nibh. Sed ornare rutrum enim a scelerisque. Nullam quis elit odio. Nam pharetra sit amet nibh sollicitudin semper. Fusce aliquam tortor sit amet lorem congue, tempor ornare eros sodales. Vestibulum viverra ipsum non mi pulvinar vulputate. Donec in ligula non purus luctus euismod vel ac enim. Nulla non pellentesque magna, sed luctus sem. Nunc eget dui dictum, tempor purus eu, venenatis urna.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isBabysitter: true,
          locationLatitude: 52.37482559261453,
          locationLongitude: 4.878581938640509,
          name: "Nigel",
          imageUrl:
            "https://ca.slack-edge.com/T0DK39WAJ-U03P16ZCVRN-7a14eec05a7b-512",
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
