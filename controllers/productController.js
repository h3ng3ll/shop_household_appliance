const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
const { Product } = require("../models/models");

class ProductController {
  async create(req, res, next) {
    try {
      const { productDescription, price, name } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = Product.create({
        productDescription,
        price,
        name,
        img: fileName,
      });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getOne(req, res) {}

  async getAll(request, response) {
    const products = Product.getAll();
    response.json(products);
  }
  async delete(req, res) {
    // const {id} = req.body;
  }
}

module.exports = new ProductController();
