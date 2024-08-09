const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

// Rotas para passageiros
router.post("/passageiros", controllers.createPassageiro);
router.get("/passageiros", controllers.findAllPassageiros);
router.delete("/passageiros/:id", controllers.deletePassageiro);

// Rotas para lista de passageiros
router.post("/lista", controllers.createListaPassageiros);
router.get("/lista", controllers.findAllListaPassageiros);
router.get("/lista/search", controllers.searchListaPassageiros); // Rota para buscar por item
router.delete("/lista/:id", controllers.deleteListaPassageiros);

module.exports = router;
