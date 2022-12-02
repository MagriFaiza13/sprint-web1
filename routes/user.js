const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/:userId");


module.exports = router;

