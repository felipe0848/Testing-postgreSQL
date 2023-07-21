const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");
const SateliteController = require("../Controller/SateliteController");
const CaptainController = require("../Controller/CaptainController");
const SpaceshipController = require("../Controller/SpaceshipController");

//Rotas de Planetas
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planets/:planetId/satelites", SateliteController.store);
routes.get("/planets/:planetId/satelites", SateliteController.index);

//Rotas de Capitões
routes.post("/captain", CaptainController.store);
routes.get("/captain", CaptainController.index);

//Rota de Naves
routes.post("/spaceship", SpaceshipController.store);
routes.get("/spaceship", SpaceshipController.index);

module.exports = routes;
