const uuid = require("uuid");
const path = require("path");
const fs = require("fs")
const ApiError = require("../error/ApiError");
const { Product } = require("../models/models");
const { Op } = require("sequelize");

class ProductController {
  async create(req, res, next) {
    try {

      const { model_name, name, price, supplier_id, brand_id,
        type_id, details, release_date, discount, rating,
        category_id , 
      } = req.body;

      const { img } = req.files
      const fileName = uuid.v4() + ".jpg";

      img.mv(path.resolve(__dirname, "..", "static", fileName))

      const product = await Product.create({
        model_name, price, name,
        release_date,
        discount: discount == '' ? undefined : discount,
        rating: rating === '' ? undefined : rating,
        details,
        img: fileName,
        supplierSupplierId: supplier_id,
        brandBrandId: brand_id,
        typeTypeId: type_id,
        userUserId: req.user.user_id,
        categoryCategoryId: category_id
      });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params

    if (!id) {
      next(ApiError.badRequest("You must pass productId"))
    }
    const product = await Product.findOne({
      where: {
        product_id: id,
      },
    },

    )
    res.json(product)
  }

  async getAll(req, res) {
    const { brandId, typeId, limit, page,
      priceMin, priceMax, categoryId, supplier_id ,
      searchQuery,
    } = req.body;

    let pages = page || 1
    let limits = limit || 9
    let offset = pages * limits - limits

    const where = {
      typeTypeId: typeId,
      brandBrandId: brandId,
      categoryCategoryId: categoryId, 
      supplierSupplierId: supplier_id,
      price: {
        [Op.gte]: priceMin || 0,
        [Op.lte]: priceMax || Number.MAX_SAFE_INTEGER, 
      },
      [Op.or] : [
        {name : { [Op.iLike]: `%${searchQuery || ""}%`}},
        {model_name: { [Op.iLike]: `%${searchQuery || ""}%`}}
      ]
    }
    if(!supplier_id) delete where.supplierSupplierId;
    if(!brandId) delete where.brandBrandId;
    if(!typeId) delete where.typeTypeId;
    if(!categoryId) delete where.categoryCategoryId;
    
    // let products;
    const products = await Product.findAndCountAll({
      where,
      limit: limits,
      offset
    });

    // if (!brandId && !typeId) {
    //   products = await Product.findAndCountAll({ limits , offset});
    // } else if (!brandId && typeId) {
    //   products = await Product.findAndCountAll({ where: { typeTypeId: typeId }  , limits , offset});
    // } else if (brandId && !typeId) {
    //   products = await Product.findAndCountAll({ where: { brandBrandId: typeId}  , limits , offset});
    // } else if (brandId && typeId) {
    //   products = await Product.findAndCountAll({ where: { brandBrandId: brandId, typeTypeId: typeId }  , limits , offset});
    // }

    res.json(products)
  }
  async delete(req, res) {

    const { id } = req.params;

    
    const product = await Product.findOne({ where: { product_id: id } })

    await product.destroy();

    return res.json(product);

  }
}

module.exports = new ProductController();
