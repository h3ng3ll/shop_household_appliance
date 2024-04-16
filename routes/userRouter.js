const Router = require("express");
const router = new Router();

const userController = require("../controllers/userController");

router.get("/auth", userController.check);

router.post("/registration", userController.registration);
router.post("login", userController.login);
router.delete("/delete", userController.delete);

module.exports = router;
