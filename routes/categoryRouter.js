


const Router = require("express");
const router = new Router();



const checkRole = require("../middleware/checkRoleMidleware")
const categoryController = require("../controllers/categoryController")

router.get("/getAll", categoryController.getAll);
router.post("/create", checkRole(process.env.ADMIN) , categoryController.create);
router.delete("/:id", checkRole(process.env.ADMIN) , categoryController.delete);

module.exports = router;
