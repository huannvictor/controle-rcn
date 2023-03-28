const express = require("express");
const PromoterController = require("../Controllers/PromoterController");
const routes = express.Router();

const RcnController = require("../Controllers/RcnController");

//* CREATE
routes.post("/rcn", RcnController.store);
routes.post("/promoter", PromoterController.store);

//* READ
routes.get("/rcn", RcnController.index);
routes.get("/promoters", PromoterController.index);

//* UPDATE
routes.put("/rcn/:id", RcnController.update);

//* DELETE
routes.delete("/rcn/:id", RcnController.delete);

module.exports = routes;
