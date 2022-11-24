const { Router } = require("express");

const Family = require("../models").profile;

const router = new Router();

// display list of families
router.get("/", async (request, response, next) => {
  const families = await Family.findAll({
    where: { isBabysitter: false },
  });
  response.send(families);
});

// view family profile
router.get("/:id", async (request, response, next) => {
  const familyId = parseInt(request.params.id);
  console.log("family ID", familyId);
  const family = await Family.findByPk(familyId);

  if (!family) {
    response.status(404).send("This profile does not exist");
  } else {
    response.send(family);
  }
});

module.exports = router;
