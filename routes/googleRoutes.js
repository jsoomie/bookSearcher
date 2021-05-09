const router = require("express").Router();
const { findAll } = require("../controllers/googleControl");

router.get("/", findAll);

module.exports = router;
