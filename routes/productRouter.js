const Router = require("express");
const router = new Router();


const productRouter = require("../controllers/productController");
const checkRole = require("../middleware/checkRoleMidleware")

router.post("/getAll", productRouter.getAll);
router.get("/:id", productRouter.getOne);
router.post("/create", checkRole(process.env.ADMIN) , productRouter.create);
router.delete("/:id", productRouter.delete);

module.exports = router;
