const express = require("express");
const router = express.Router();

const { getAllPeople } = require("../controllers/person");

router.route("/").get(getAllPeople);

module.exports = router;
