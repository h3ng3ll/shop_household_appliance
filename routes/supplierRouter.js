const Router = require("express");

const router = Router();

const supplier = require("../controllers/supplierController");

router.post("/create", supplier.create);
router.get("/getOne", supplier.getSupplier);
router.get("/getAll", supplier.getSuppliers);
router.delete("/delete", supplier.deleteSupplier);

module.exports = router;
