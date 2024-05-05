
import { AdminUser } from "models/AdminUser"
import { User } from "models/foundations/User"

import { makeAutoObservable } from "mobx"
import { Type } from "models/Type";
import { Brand } from "models/Brand";
import { Supplier } from "models/Supplier";
import { Product } from "models/Product";
import { Review } from "models/Review";

export default class DeviceStore {

    private _types: Type[];
    private _brands: Brand[];
    private _suppliers: Supplier[];

    private _products: Product[];


    constructor() {
        this._types = [
            new Type(1, "big_hs"),
            new Type(1, "small_hs")
        ];
        this._brands = [
            new Brand(1, "Samsung", 1, 1938),
            new Brand(2, "Apple", 2, 1976)
        ]
        this._suppliers = [
            new Supplier(1, "Arizon", 6, "kasapovdimag@gmail.com", false),
            new Supplier(2, "Extra", 6, "extra.in.ua@gmail.com", false)
        ]

        this._products = [
            new Product("Пральна машина", "https://s.ek.ua/jpg_zoom1/2390206.jpg", true, 2.4, 1, 1, 8, 4, 1, "WAN 28263 UA", 17000),
            new Product("Пральна машина", "https://s.ek.ua/jpg_zoom1/2390206.jpg", true, 1.6, 2, 1, 8, 4, 1, "WAN 28263 UA", 17000),
            new Product("Пральна машина", "https://s.ek.ua/jpg_zoom1/2390206.jpg", true, 2.0, 3, 1, 8, 4, 1, "WAN 28263 UA", 17000),
            new Product("Пральна машина", "https://s.ek.ua/jpg_zoom1/2390206.jpg", true, 5.0, 4, 1, 8, 4, 1, "WAN 28263 UA", 17000),
        ]


        makeAutoObservable(this)
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get suppliers() {
        return this._suppliers
    }

    get popularWashingMachines() {
        return this._products
    }

    get products() {
        return this._products
    }

    public getReview(product_id: number): Review[] {
        return [
            new Review(1, 5, "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convall", new Date(2003, 4, 3), product_id, new AdminUser(1, "test@gmail.com", new Date("2004-10-10"), 1, "alex", "London", "https://scontent.fiev8-2.fna.fbcdn.net/v/t39.30808-6/274932157_491155372497552_796562318343347496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0sEqve8SgCYQ7kNvgHIyK-F&_nc_ht=scontent.fiev8-2.fna&oh=00_AfCZRF5_PnplIvqCZK9TkCCAwxYDKQGH_EqTo-qL1K0PNw&oe=663D6E48")),
            new Review(1, 5, "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convall", new Date(2003, 4, 3), product_id, new AdminUser(1, "test@gmail.com", new Date("2004-10-10"), 1, "alex", "London", "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg")),

            new Review(1, 5, "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convall", new Date(2003, 4, 3), product_id, new AdminUser(1, "test@gmail.com", new Date("2004-10-10"), 1, "alex", "London")),
        ];
    }

}