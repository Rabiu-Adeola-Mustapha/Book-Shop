const path = require("path");
const fs = require("fs");

const userMiddlewares = {};

const AuthStatus = {
  TRUE: "true",
};

userMiddlewares.checkAuth = (req, res, next) => {
  const auth = req.query.auth;

  if (auth === AuthStatus.TRUE) {
    return next();
  }

  return res
    .status(401)
    .sendFile(path.join(__dirname + "/../pages/no-auth.html"));
};

userMiddlewares.timeStamp = (req, res, next) => {
  let d = new Date();
  let milliseconds = d.getMilliseconds();

  let date = d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  let logTxt = `
     DATE: ${date}:${milliseconds}
     DATA: ${JSON.stringify(req.body)}
   `;

  const logger = fs.createWriteStream("log.txt", { flags: "a" });

  logger.end(logTxt);

  next();
};

let today = new Date().toLocaleTimeString();

module.exports = userMiddlewares;
