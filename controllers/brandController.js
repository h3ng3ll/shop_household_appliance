const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");
// const countries = require("../utils/countries")

class BrandController {
  async create(req, res, next) {
    const { name , country_of_origin , established_year } = req.body;
    
    if (!name ) {
      next(ApiError("It's not all field specify in request"));
    }
    const the_brand = await Brand.findOne({ where: { name: name } });
    if (the_brand) {
      next(ApiError.internal("Error . Type products already exists"));
    }

    const brand = await Brand.create({ name , country_of_origin , established_year});
    return res.json(brand);
  }
  async getAll(req, res) {
    const {id , name} = req.body;


    let brands 
    if(!id && !name){
       brands = await Brand.findAll();
    } else if (id ) {
       brands = await Brand.findAll({where: {brand_id : id}});
    } else if(name) {
       brands = await Brand.findAll({where: {name}});
    } else {
       brands = await Brand.findAll({where: {brand_id : id , name}});
    }
    
    return res.json(brands);
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
     
      const brand = await Brand.findAll({ where: { brand_id: id} });

      return res.json(brand);
    } catch (e) {
      next(ApiError.badRequest("Error " + e));
    }
  }
  async delete(req, res) {
    const {id}  = req.params 
    const brand = await Brand.findOne({where: {brand_id : id}})
    await brand.destroy();
    return res.json(brand)
  }
}

module.exports = new BrandController();
