const express = require("express");
const router = express.Router();

const { getTestR } = require("../controller/testrcont");

router.get("/test", getTestR);

module.exports = router;