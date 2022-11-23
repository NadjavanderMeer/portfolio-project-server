const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

// login
router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response
        .status(400)
        .send("Please provide both email and password");
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response
        .status(400)
        .send("User with that email not found or password incorrect");
    }

    delete user.dataValues["password"]; //don't send back password hash
    const token = toJWT({ userId: user.id });
    return response.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return response.status(400).send("Something wend wrong, sorry");
  }
});

// sign up
router.post("/signup", async (request, response, next) => {
  const { email, password, name, isBabysitter } = request.body;
  if (!email || !password || !name) {
    return response
      .status(400)
      .send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
      isBabysitter,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    response.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return response
        .status(400)
        .send("There is an existing account with this email");
    }

    return response.status(400).send("Something went wrong, sorry");
  }
});

// The /me endpoint can be used to:
// - get the user's email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (request, response, next) => {
  // don't send back the password hash
  delete request.user.datavalues["password"];
  response.status(200).send({ ...request.user.dataValues });
});

module.exports = router;