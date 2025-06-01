var express = require("express");
var router = express.Router();

var championController = require("../controllers/championController");


router.get("/championUltimos", function (req, res) {
    championController.buscarCampeoes(req, res);
});

module.exports = router;