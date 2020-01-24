const express = require("express");

const projectsRouter = require("./api/projects/projectsRouter.js");
const resourcesRouter = require("./api/resources/resourcesRouter.js");
const tasksRouter = require("./api/tasks/tasksRouter.js");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", logger, (req, res) => {
  res.send(`This is the node-api-3 project mic check 123....`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `${req.method} to ${req.originalUrl} at [${new Date().toISOString()}].`
  );

  next();
}

module.exports = server;
