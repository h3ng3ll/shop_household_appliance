const { Router } = require("express");
const brandController = require("../controllers/brandController");

const router = Router();

router.get("/getAll", brandController.getAll);
router.get("/getOne", brandController.getOne);
router.post("/create", brandController.create);

module.exports = router;
