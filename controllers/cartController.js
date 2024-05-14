const { Supplier, Basket_Cart, Product } = require("../models/models");
const {} = require("../error/ApiError");
const ApiError = require("../error/ApiError");
const { where, Op } = require("sequelize");

class CartController {
  async create(req, res , next) {
    const {  productProductId , basketBasketId } = req.body
  
    if(!productProductId || !basketBasketId){
        return next(ApiError.badRequest("Required field not specified"))
    }
    const product = await Product.findOne({where: {product_id: productProductId}})
    
    if (!product) {
        return next(ApiError.badRequest("DB not contain given productId or it was null"))
    }

    await Basket_Cart.create({productProductId , basketBasketId });

    return res.json(product)

}


  async getCartItems(req, res) {
    const {basketBasketId } = req.body

    if (!basketBasketId){
        return next(ApiError.badRequest("'baskId' must be specified"))
    }
    const cartItems = await Basket_Cart.findAll({where: {basketBasketId: basketBasketId }})

    
    const productIds = cartItems.map(cartItem => cartItem.productProductId);

    const products = await Product.findAll({
        where:{
            product_id: {[Op.in] :  productIds }
        }
    })

    return res.json( products  );
  }

  async deleteCartItem(req, res, next) {
    const {productProductId , basketBasketId} = req.body

    if(!productProductId || !basketBasketId){
        return next(ApiError.badRequest("'basket_cart_id' must be specified"))
    }

    const cartItem = await Basket_Cart.findOne({where:{productProductId , basketBasketId}})
    await cartItem.destroy();
    return res.json(cartItem);
  }


}

module.exports = new CartController();
