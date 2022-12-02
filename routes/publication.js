const express = require("express");
const router = express.Router();
const { createpublication } = require("../controllers/publication.controller");

router.post("/", createpublication);
router.get("/:publicationId");


module.exports = router;
