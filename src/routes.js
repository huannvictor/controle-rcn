const express = require("express");
const RcnController = require("../Controllers/RcnController");
const PromoterController = require("../Controllers/PromoterController");
const SchoolsController = require("../Controllers/SchoolsController");

const routes = express.Router();

//* CREATE
routes.post("/rcn", RcnController.store);
routes.post("/promoter", PromoterController.store);
routes.post("/newschool", SchoolsController.store);

//* READ
routes.get("/rcn", RcnController.index);
routes.get("/promoters", PromoterController.index);
routes.get("/schools", SchoolsController.index);

//* UPDATE
routes.put("/rcn/:id", RcnController.update);
routes.put("/promoter/:id", PromoterController.update);

//* DELETE
routes.delete("/rcn/:id", RcnController.delete);
routes.delete("/promoter/:id", PromoterController.delete);

module.exports = routes;
