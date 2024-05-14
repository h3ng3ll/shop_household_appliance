const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const productRouter = require("./productRouter");
const supplierRouter = require("./supplierRouter");
const brandRouter = require("./brandRouter");
const basketRouter = require("./basketRouter")
const categoryRouter = require("./categoryRouter")
const cartRouter = require("./cartRouter")

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/supplier", supplierRouter);
router.use("/category" , categoryRouter)
router.use("/basket" , basketRouter);
router.use("/cart" , cartRouter);


module.exports = router;
