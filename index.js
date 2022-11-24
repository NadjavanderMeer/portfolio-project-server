// packages
const express = require("express");
const corsMiddleware = require("cors");

// routers
const authRouter = require("./routers/auth");
const babysitterRouter = require("./routers/babysitterRouter");
const familyRouter = require("./routers/familyRouter");

// create an express app
const app = express();

// CORS middleware
app.use(corsMiddleware());

// express.json() bodyparser
app.use(express.json());

// routes
app.use("/auth", authRouter);
app.use("/babysitters", babysitterRouter);
app.use("/families", familyRouter);

// start listening
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
