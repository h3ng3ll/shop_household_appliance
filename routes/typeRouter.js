const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");

router.get("/getOne", typeController.getOne);
router.get("/getAll", typeController.getAll);
router.post("/create", typeController.create);
router.delete("/delete", typeController.delete);

module.exports = router;
