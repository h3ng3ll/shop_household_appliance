const Router = require("express");

const router = Router();

const basket = require("../controllers/basketController");
const checkRoleMidleware = require("../middleware/checkRoleMidleware");

router.post("/create",   basket.create);
router.post("/getAll", basket.getBasketItems);
router.post("/delete", basket.deleteBasketItem);

module.exports = router;
