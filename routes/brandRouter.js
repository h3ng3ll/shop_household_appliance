const { Router } = require("express");
const brandController = require("../controllers/brandController");
const checkRole= require("../middleware/checkRoleMidleware");

const router = Router();

router.post("/getAll", brandController.getAll);
router.get("/:id", brandController.getOne);
router.post("/create", checkRole(process.env.ADMIN)  , brandController.create);
router.delete("/:id" , checkRole(process.env.ADMIN)  , brandController.delete)
module.exports = router;
