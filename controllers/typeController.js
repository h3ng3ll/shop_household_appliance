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
    const { type_id, name } = req.body;

    let types;
    if (!type_id && !name) {
      types = await Type.findAll();

    } else if (type_id) {
      types = await Type.findAll({ where: { type_id } });
    }
    else if (name) {
      types = await Type.findAll({ where: { name } });
    } else {

      types = await Type.findAll({ where: { type_id, name } });
    }

    return res.json(types);
  }

  async getOne(req, res, next) {
    try {
      const { id} = req.params;
      
      const type = await Type.findOne({type_id: id})
      return res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e.toString()));
    }
  }
  async delete(req, res) {
    const { id} = req.params;
    const type = await Type.findOne({where: {type_id : id}})
    await type.destroy();

    return res.json(type)
   }


}

module.exports = new TypeController();
