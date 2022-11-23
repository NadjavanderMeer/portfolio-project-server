const User = require("../models").user;
const { toData } = require("./jwt");

const auth = async (request, response, next) => {
  // 1. check for authorization header and "split" it.
  const auth =
    request.headers.authorization && request.headers.authorization.split(" ");

  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  //    If not, we return a 401 status and the message: 'Please supply some valid credentials
  //    Remember to try/catch the call to "toData()".
  if (!auth || !(auth[0] === "Bearer") || !auth[1]) {
    return response
      .status(401)
      .send(
        "This endpoint requires an Authorization header with a valid token"
      );
  }

  // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
  try {
    const data = toData(auth[1]);
    const user = await User.findByPk(data.userId);

    // 4. If not found, set status to 404 "no user found";
    if (!user) {
      return response.status(404).send("User does not exist");
    }

    // 5. If user is found, set it to `req.user = user` and call next();
    // add user object to request
    request.user = user;
    // next handler
    return next();
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error);

    switch (error.name) {
      case "TokenExpiredError":
        return response
          .status(401)
          .send({ error: error.name, message: error.message });

      case "JsonWebTokenError":
        return response
          .status(400)
          .send({ error: error.name, message: error.message });

      default:
        return response.status(400).send("Something went wrong, sorry");
    }
  }
};

module.exports = auth;
