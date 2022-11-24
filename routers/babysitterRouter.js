const { Router } = require("express");

const Babysitter = require("../models").profile;

const router = new Router();

router.get("/", async (request, response, next) => {
  const babysitters = await Babysitter.findAll({
    where: { isBabysitter: true },
  });
  response.send(babysitters);
});

module.exports = router;
