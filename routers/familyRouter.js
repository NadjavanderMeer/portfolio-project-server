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

module.exports = router;
