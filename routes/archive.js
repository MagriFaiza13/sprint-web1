const express = require("express");
const router = express.Router();
const { createarchive } = require("../controllers/archive.controller");

router.post("/", createarchive);
router.get("/:archiveId");


module.exports = router;
