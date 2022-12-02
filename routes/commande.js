const express = require("express");
const router = express.Router();
const { createcommande } = require("../controllers/commande.controller");

router.post("/", createcommande);
router.get("/:commandeId");


module.exports = router;
