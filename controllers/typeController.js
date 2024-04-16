const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async create(req, res, next) {
    const { name } = req.body;
    if (!name) {
      next(ApiError("The 'name' field must be provided"));
    }
    /// check if exists in DataBase
    const the_type = await Type.findOne({ where: { name } });
    if (the_type) {
      next(ApiError.internal("Error . Type products already exists"));
    }
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async getOne(req, res, next) {
    try {
      const { id, name } = req.query;
      let type;
      if (!id && !name) {
        next(ApiError.badRequest("Error . Id or name must be provided"));
      } else if (!id && name) {
        type = Type.findAll({ where: { name: name } });
      } else if (id && !name) {
        type = Type.findAll({ where: { type_id: id } });
      } else if (id && name) {
        type = Type.findAll({ where: { name: name, type_id: id } });
      }
      res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e.toString()));
    }
  }
  async delete(req, res) {}
}

module.exports = new TypeController();
