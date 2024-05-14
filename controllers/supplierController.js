const { Supplier } = require("../models/models");
const {} = require("../error/ApiError");
const ApiError = require("../error/ApiError");
const { where } = require("sequelize");

class SupplierController {
  async create(req, res) {
    const { name , country_of_origin , contact_email , isActive} = await req.body;
    if (!name ) {
      next(ApiError("Missing required parameters in post query"));
    }
    const the_supplier = await Supplier.findOne({ where: { name } });
    if (the_supplier) {
      next(ApiError.internal("Error . Type products already exists"));
    }

    const supplier = await Supplier.create({ name  , country_of_origin , contact_email , isActive});
    return res.json(supplier);
  }
  async getSupplier(req, res) {
    const { id } = req.params;
    const supplier = await Supplier.findOne({supplier_id : id})

    res.json(supplier);
  }
  async getSuppliers(req, res) {
    const {supplier_id , name} = req.body
    let suppliers 
    if(supplier_id && name){
      suppliers = await Supplier.findAll({where : {supplier_id , name}});
    } else if (supplier_id){
      suppliers = await Supplier.findAll({where : {supplier_id }});

    } else if (name) {
      suppliers = await Supplier.findAll({where : { name}});
    } else {
      suppliers = await Supplier.findAll();
    }
    
    return res.json(suppliers);
  }

  async deleteSupplier(req, res, next) {
    const { id } = req.params;
    /// find by primary key
    const supplier = await Supplier.findOne({where: {supplier_id: id}});
    if (!supplier) {
      return next( ApiError.badRequest( "Provided id is not managed to grab  or not finded in database"));
    }
    /// delete it
    try {
     await supplier.destroy();

      res.json(supplier);
    } catch (error) {
      next(ApiError.badRequest("Unhandled error " + error));
    }
  }
}

module.exports = new SupplierController();
