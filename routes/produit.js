const express = require("express");
const router = express.Router();
const { createproduit } = require("../controllers/produit.controller");

router.post("/", createproduit);
router.get("/:produitId");


module.exports = router;
