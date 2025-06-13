var express = require("express");
var router = express.Router();

var championController = require("../controllers/championController");


router.get("/championUltimos", function (req, res) {
    championController.buscarCampeoes(req, res);
});

router.get("/e", function (req, res) {
    championController.clicarBrand(req, res);
});

router.get("/notasReinado", function (req, res) {
    championController.notasReinado(req, res);
});

router.post("/notasReinado", function (req, res) {
    championController.inserirDados(req, res);
});

module.exports = router;