const express = require("express");
const routes = express.Router();

const RcnController = require("../Controllers/RcnController");

//* CREATE
routes.post("/rcn", RcnController.store);

//* READ
routes.get("/rcn", RcnController.index);

//* UPDATE
routes.put("/rcn/:id", RcnController.update);

//* DELETE
routes.delete("/rcn/:id", RcnController.delete);

module.exports = routes;
