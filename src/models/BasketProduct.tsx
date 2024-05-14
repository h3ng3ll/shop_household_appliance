import { Product } from "./Product"
import { Basket } from "./interfaces/Basket"



export class BasketProduct {

    /// contain id of product 
    /// which user may like to . 
    public basket_product_id: number

    public product: Product

    constructor(basket_product: {
        basket_product_id: number,
        product: Product,
    }) {
        this.basket_product_id = basket_product.basket_product_id
        this.product = basket_product.product
    }

    static fromJson(json: Record<string, any>) {
        return new BasketProduct({
            basket_product_id: json['basket_product_id'],
            product: Product.fromJson(json['product'])
        })
    }


}