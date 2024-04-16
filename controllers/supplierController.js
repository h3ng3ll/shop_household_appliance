const { Supplier } = require("../models/models");
const {} = require("../error/ApiError");
const ApiError = require("../error/ApiError");

class SupplierController {
  async create(req, res) {
    const { name } = await req.body;
    if (!name) {
      next(ApiError("The 'name' field must be provided"));
    }
    const the_supplier = await Brand.findAll({ where: { name: name } });
    if (the_supplier) {
      next(ApiError.internal("Error . Type products already exists"));
    }

    const supplier = await Supplier.create({ name });
    return res.json(supplier);
  }
  async getSupplier(req, res) {
    const { id } = req.query;
    return res.json("id is " + id.toString());
    // const id = req.query.id;
    // const supplier = await Supplier
  }
  async getSuppliers(req, res) {
    const suppliers = await Supplier.findAll();
    return res.json(suppliers);
  }

  async deleteSupplier(req, res, next) {
    const { id } = req.body;
    /// find by primary key
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      next(
        next(
          ApiError.badRequest(
            "Provided id is not managed to grab  or not finded in database"
          )
        )
      );
    }
    /// delete it
    try {
      const result = await supplier.destroy();

      res.json("deleted successfully");
    } catch (error) {
      next(ApiError.badRequest("Unhandled error " + error));
    }
  }
}

module.exports = new SupplierController();
