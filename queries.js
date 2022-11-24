const Users = require("./models").user;
const Profiles = require("./models").profile;

const getAllUsers = async () => {
  const allUsers = await Users.findAll({ raw: true });
  console.log(allUsers);
};

// getAllUsers();

const getUserById = async (id) => {
  const user = await Users.findByPk(id, { raw: true });
  console.log(user);
};

// getUserById(3);

const getBabysitters = async () => {
  const babysitters = await Profiles.findAll({
    where: { isBabysitter: true },
    raw: true,
  });
  console.log(babysitters);
};

getBabysitters();
