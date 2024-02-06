const express = require("express");

const addPerson = require("../controllers/person");

const router = express.Router();

router.post("/create", addPerson);

module.exports = router;
