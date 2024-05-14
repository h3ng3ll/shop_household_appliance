import { AdminUser } from "models/AdminUser"
import { User } from "models/foundations/User"

import { makeAutoObservable } from "mobx"
import { Product } from "models/Product"
import { addProductToBasket, addProductToCart, deleteProductFromBasket, deleteProductFromCart } from "http/productApi"
import { BasketProduct } from "models/BasketProduct"

export default class UserStore {

    private _isAuth: boolean
    private _user?: User

    /// add from db via uids
    private _wishList: Product[]
    private _cartItems: Product[];

    constructor() {
        this._isAuth = false
        this._wishList = []
        this._cartItems = []
        makeAutoObservable(this)
    }


    public async addToCart(productId : number) {
        const cartItemRow = await addProductToCart(this._user?.basket_id! , productId)
        const cartItem = Product.fromJson(cartItemRow)
        this._cartItems.push(cartItem)
    }

    public async removeFromCart(productId : number) {
        await deleteProductFromCart(this._user?.basket_id! , productId)
        const cartList = this._wishList.filter((value) => value.product_id !== productId); 
        this.setCart(cartList)
    }

    public async  addToBasket( productId : number ) {
        const basketItemRow = await addProductToBasket(this._user?.basket_id! , productId)
        const basketItem = Product.fromJson(basketItemRow)
        this._wishList.push(basketItem)
    }
    
    public async removeFromBasket(productId: number) {
        await deleteProductFromBasket(this._user?.basket_id! , productId)
        const wishList = this._wishList.filter((value) => value.product_id !== productId); 
        this.setWishList(wishList)
    }

    public get user(): User | undefined {
        return this._user
    }
    public setUser(user: User) {
        this._user = user
    }


    public get isAuth() {
        return this._isAuth
    }

    public setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth
    }

    public get wishList() {
        return this._wishList
    }

    setWishList(wishList : Product[]) {
        this._wishList = wishList;
    }

    /// basket or cart
    public get cart() {
        return this._cartItems

    }

    setCart(basketItems : Product[]) {
        this._cartItems = basketItems;
    }

    public logOut() {
        this._user = undefined;
        this._isAuth = false;
        localStorage.removeItem("token")
    }
}