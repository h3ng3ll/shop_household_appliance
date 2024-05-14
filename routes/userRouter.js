const Router = require("express");
const router = new Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMidleware");
const checkOwnerMiddleWare = require("../middleware/checkOwnerMiddleWare");

router.post("/auth" , authMiddleware, userController.auth);

router.post("/register", userController.registration);
router.post("/login", userController.login);
router.delete("/delete", userController.delete);

router.post("/updateCredentials" , authMiddleware , checkOwnerMiddleWare , userController.updateCredentials)
module.exports = router;

