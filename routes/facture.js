const express = require("express");
const router = express.Router();
const { createfacture } = require("../controllers/facture.controller");

router.post("/", createfacture);
router.get("/:factureId");


module.exports = router;
