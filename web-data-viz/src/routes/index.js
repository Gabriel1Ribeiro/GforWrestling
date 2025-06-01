const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/telas/index.html"));
});

module.exports = router;
