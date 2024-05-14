
const Router = require("express");

const router = Router();

const cart = require("../controllers/cartController");


router.post("/create",   cart.create);
router.post("/getAll", cart.getCartItems);
router.post("/delete", cart.deleteCartItem);

module.exports = router;
