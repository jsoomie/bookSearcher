const router = require("express").Router();
const bookRoutes = require("./bookRoutes");
const googleRoutes = require("./googleRoutes");

router.use("/book", bookRoutes);
router.use("/google", googleRoutes);

module.exports = router;
