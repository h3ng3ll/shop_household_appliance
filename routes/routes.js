const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const productRouter = require("./productRouter");
const supplierRouter = require("./supplierRouter");
const brandRouter = require("./brandRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/supplies", supplierRouter);
// router.use("/supplier");
// router.use("/review");

module.exports = router;
