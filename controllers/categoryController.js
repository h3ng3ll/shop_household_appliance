const uuid = require("uuid");
const path = require("path");
const fs = require("fs")
const ApiError = require("../error/ApiError");
const { Product, Category } = require("../models/models");

class CategoryController {
  async create(req, res, next) {
    const {name} = req.body
    if(!name){
        return next(ApiError.badRequest("The 'name' is required"))
    }
    const category = await Category.create({name})
    res.json(category)
  }
  
  async getAll(req, res) {
    
    const categories = await Category.findAll(); 
    
    res.json(categories)
  }
  async delete(req, res) {
    const {id} = req.params
    if(!id){
        return next(ApiError.badRequest("The 'category_id' is required"))
    }
    const category = await Category.findOne({where: {category_id: id}})
    await category.destroy();
    res.json(category)

  }
}

module.exports = new CategoryController();
