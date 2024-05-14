const { Supplier, Basket_Product, Product } = require("../models/models");
const { } = require("../error/ApiError");
const ApiError = require("../error/ApiError");
const { where, Op } = require("sequelize");

class BasketController {
    async create(req, res, next) {
        const { basketId,  productId } = req.body;


        if (!basketId || !productId) {
            return next(ApiError.badRequest("'basketId' and 'productId' must be provided "))
        }
        const product = await Product.findOne({where: {product_id: productId}})

         if (!product) {
            return next(ApiError.badRequest("DB not contain given productId or it was null"))
        }

        await Basket_Product.create({ basketBasketId: basketId , productProductId : productId})
     
        return res.json(product)
    }
    async getBasketItems(req, res , next) {

        const { basketBasketId, page, limit } = req.body
        if (!basketBasketId) {
            return next(ApiError.badRequest("'basketBasketId' must be provided "))
        }

        let limite = limit || 9
        let pages = page || 1

        const offset = pages * limite - limite
        
        const basketItems = await Basket_Product.findAll({ where: { basketBasketId } , offset },  limite , )

        const productId = basketItems.map(basketItem => basketItem.productProductId);
        

        const products = await Product.findAll({
            where:{
                product_id: {[Op.in] :  productId }
            }
        })
    
        // const basketProduct = Basket_Product({})
        return res.json(products);
    }

    async deleteBasketItem(req, res, next) {
        const { basketBasketId , product_id  } = req.body;
        if (!product_id || !basketBasketId) {
            next(ApiError.badRequest("Not provided required fields "))
        }
        try {
            const basketItem = await Basket_Product.findOne({ where: { basketBasketId , productProductId: product_id } })
            await basketItem.destroy()
            return res.json(basketItem)
        } catch (e) {
            return next(ApiError.internal("Failed delete basketItem"))
        }
    
    }
}

module.exports = new BasketController();
