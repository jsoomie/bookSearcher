const router = require("express").Router();
const {
  findAll,
  findOne,
  update,
  create,
  remove,
} = require("../controllers/bookControl");

router.get("/", findAll);
router.get("/:id", findOne);
router.put("/update", update);
router.post("/create", create);
router.delete("/remove", remove);

module.exports = router;
