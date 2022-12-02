const express = require("express");
const router = express.Router();
const { createDelivrey } = require("../controllers/Delivrey.controller");

router.post("/", createDelivrey);
router.get("/:DelivreyId");


module.exports = router;
