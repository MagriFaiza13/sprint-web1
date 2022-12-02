const express = require("express");
const router = express.Router();
const { createreclamation } = require("../controllers/reclamation.controller");

router.post("/", createreclamation);
router.get("/:reclamationId");


module.exports = router;
