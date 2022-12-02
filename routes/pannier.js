const express = require("express");
const router = express.Router();
const { createproduit } = require("../controllers/pannier.controller");

router.post("/", createproduit);
router.get("/:pannierId");


module.exports = router;
