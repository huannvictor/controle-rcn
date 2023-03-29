const express = require("express");
const RcnController = require("../Controllers/RcnController");
const PromoterController = require("../Controllers/PromoterController");
const SchoolsController = require("../Controllers/SchoolsController");

const routes = express.Router();

//* CREATE
routes.post("/rcn", RcnController.store);
routes.post("/promoter", PromoterController.store);
routes.post("/newschool/:promoterId", SchoolsController.store);

//* READ
routes.get("/rcn", RcnController.index);
routes.get("/promoters", PromoterController.index);
routes.get("/schools", SchoolsController.index);
routes.get("/schools/:promoterId", SchoolsController.indexByPromoter);

//* UPDATE
routes.put("/rcn/:id", RcnController.update);
routes.put("/promoter/:id", PromoterController.update);
routes.put("/school/:id", SchoolsController.update);

//* DELETE
routes.delete("/rcn/:id", RcnController.delete);
routes.delete("/promoter/:id", PromoterController.delete);
routes.delete("/school/:id", SchoolsController.delete);

module.exports = routes;
