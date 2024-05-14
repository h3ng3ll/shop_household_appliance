const Router = require("express");

const router = Router();

const supplier = require("../controllers/supplierController");
const checkRoleMidleware = require("../middleware/checkRoleMidleware");

router.post("/create", checkRoleMidleware(process.env.ADMIN) ,  supplier.create);
router.get("/:id", supplier.getSupplier);
router.post("/getAll", supplier.getSuppliers);
router.delete("/:id", checkRoleMidleware(process.env.ADMIN) , supplier.deleteSupplier);

module.exports = router;
