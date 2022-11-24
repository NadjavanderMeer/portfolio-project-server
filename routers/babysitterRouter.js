const { Router } = require("express");

const Babysitter = require("../models").profile;

const router = new Router();

// display list of babysitters
router.get("/", async (request, response, next) => {
  const babysitters = await Babysitter.findAll({
    where: { isBabysitter: true },
  });
  response.send(babysitters);
});

// view babysitter profile
router.get("/:id", async (request, response, next) => {
  const babysitterId = parseInt(request.params.id);
  console.log("babysitter ID", babysitterId);
  const babysitter = await Babysitter.findByPk(babysitterId);

  if (!babysitter) {
    response.status(404).send("This profile does not exist");
  } else {
    response.send(babysitter);
  }
});

module.exports = router;
