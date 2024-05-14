const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMidleware")

router.get("/:id", typeController.getOne);
router.post("/getAll", typeController.getAll);
router.post("/create", checkRole(process.env.ADMIN) , typeController.create);
router.delete("/:id", checkRole(process.env.ADMIN) , typeController.delete);

module.exports = router;
