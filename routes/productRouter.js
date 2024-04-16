const Router = require("express");
const router = new Router();

const productRouter = require("../controllers/productController");

router.get("/getAll", productRouter.getAll);
router.get("/getOne", productRouter.getOne);
router.post("/create", productRouter.create);
router.delete("/delete", productRouter.delete);

module.exports = router;
