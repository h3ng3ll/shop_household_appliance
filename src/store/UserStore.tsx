import { AdminUser } from "models/AdminUser"
import { User } from "models/foundations/User"

import {makeAutoObservable} from "mobx"
import { Product } from "models/Product"

export default class UserStore {

    private _isAuth : boolean 
    private _user : User

    /// add from db via uids
    private _wishList : Product[]
    private _basket : Product[];

    constructor () {
        this._isAuth = true 
        this._user = new AdminUser(1 , "test@gmail.com" , new Date("2004-10-10") , 1 , "alex" , "London" , "https://scontent.fiev8-2.fna.fbcdn.net/v/t39.30808-6/274932157_491155372497552_796562318343347496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0sEqve8SgCYQ7kNvgHIyK-F&_nc_ht=scontent.fiev8-2.fna&oh=00_AfCZRF5_PnplIvqCZK9TkCCAwxYDKQGH_EqTo-qL1K0PNw&oe=663D6E48")
        this._wishList = [
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 2.4 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 1.6 , 2 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 2.0 , 3 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 5.0 , 4 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
        ]

        this._basket = [
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 2.4 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 1.6 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 2.0 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
            new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 5.0 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
        ]
        makeAutoObservable(this)
    }


    public addToCart(product : Product) {
        // use DB
    }
    public removeFromCart(product : Product) {
        // use DB
    }

    public setIsAuth(isAuth : boolean) {
        this._isAuth = isAuth 
    }

    public setUser(user : User) {
        this._user = user
    }

    public get isAuth () {
        return this._isAuth
    }

    public get user () {
        return this._user
    }

    public get wishList () {
        return this._wishList
    }

      /// basket or cart
    public   get basket () {
        return this._basket

    }
}