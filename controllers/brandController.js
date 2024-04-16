const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");
class BrandController {
  async create(req, res, next) {
    const { name } = req.body;
    if (!name) {
      next(ApiError("The 'name' field must be provided"));
    }
    const the_brand = await Brand.findAll({ where: { name: name } });
    if (the_brand) {
      next(ApiError.internal("Error . Type products already exists"));
    }

    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async getOne(req, res, next) {
    try {
      const { id, name } = req.query;

      let brand;
      if (!id && !name) {
        next(ApiError.badRequest("Error . Id or name must be provided"));
      } else if (!id && name) {
        brand = await Brand.findAll({ where: { name: name } });
      } else if (id && !name) {
        brand = await Brand.findAll({ where: { brand_id: id } });
      } else if (id && name) {
        brand = await Brand.findAll({ where: { brand_id: id, name: name } });
      }

      return res.json(brand);
    } catch (e) {
      next(ApiError.badRequest("Error " + e));
    }
  }
  async delete(req, res) {}
}

module.exports = new BrandController();
