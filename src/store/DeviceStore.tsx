
import { AdminUser } from "models/AdminUser"
import { User } from "models/foundations/User"

import { makeAutoObservable } from "mobx"
import { Type } from "models/Type";
import { Brand } from "models/Brand";
import { Supplier } from "models/Supplier";
import { Product } from "models/Product";
import { Review } from "models/Review";
import { createBrand, createCategory, createSupplier, createType, deleteBrand, deleteCategory, deleteSupplier, deleteType } from "http/productApi";
import { Category } from "models/Category";

export default class DeviceStore {

    private _types: Type[];
    private _brands: Brand[];
    private _suppliers: Supplier[];
    private _categories : Category[];
    private _products: Product[];


    constructor() {
        this._types = [];
        this._brands = []
        this._suppliers = []
        this._products = []
        this._categories = []
        makeAutoObservable(this)
    }



    get types() {
        return this._types
    }
    setTypes(types: Type[]) {
        this._types = types
    }

    get brands() {
        return this._brands
    }
    setBrands(brands: Brand[]) {
        this._brands = brands
    }

    get suppliers() {
        return this._suppliers
    }
    setSuppliers(suppliers: Supplier[]) {
        this._suppliers = suppliers
    }
   
    get products() {
        return this._products
    }
    setProducts(products: Product[]) {
        this._products= products
    }

    get categories () {
        return this._categories;
    }

    setCategories (categories : Category[]) {
        this._categories = categories
    }

    get popularWashingMachines() {
        return this._products
    }



    public getReview(product_id: number): Review[] {
        return [
            new Review(
                1,
                5,
                "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convall",
                new Date(2003, 4, 3),
                product_id,
                new AdminUser({
                    name: "Alex",
                    surname: "Common",
                    user_id: 1,
                    email: "anatawatashi2901@gmail.com"
                }),

            ),
            new Review(
                1,
                5,
                "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convall",
                new Date(2003, 4, 3),
                product_id,
                new AdminUser({
                    name: "Alex",
                    surname: "Common",
                    user_id: 1,
                    email: "anatawatashi2901@gmail.com"
                }),

            ),
            new Review(
                1,
                5,
                "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convall",
                new Date(2003, 4, 3),
                product_id,
                new AdminUser({
                    name: "Alex",
                    surname: "Common",
                    user_id: 1,
                    email: "anatawatashi2901@gmail.com"
                }),

            )


        ];
    }


    public async addType  (newValue : string) {
        const typeRow = await createType({typeName: newValue})

        const type = Type.fromJson(typeRow);
        this._types.push(type);
    }

    public async  deleteType (type_id : number ) {
        await deleteType(type_id); 
        const types = this._types.filter((item , i ) => item.type_id !== type_id)
        this.setTypes(types)
    }   

    public async  addBrand (newValue : string) {
        const brandRow = await createBrand({name: newValue})
        const brand = Brand.fromJson(brandRow);
        this._brands.push(brand);
    }
    public async  deleteBrand (brand_id : number) {
        await deleteBrand(brand_id);
        const brands = this._brands.filter((item  , i) => item.brand_id !== brand_id)
        this.setBrands(brands)
    }

    public async  addSupplier (supplier_name : string) {
        const supplierRow = await createSupplier({name: supplier_name})
        const supplier = Supplier.fromJson(supplierRow)
        this._suppliers.push(supplier)

    }
    public async  deleteSupplier (supplier_id : number) {
        await deleteSupplier(supplier_id);
        const suppliers =  this._suppliers.filter(item => item.supplier_id !== supplier_id)
        this.setSuppliers(suppliers);
    }

    public  async addCategory (newValue : string) {
        const categoryRow = await createCategory(newValue);
        const category  = Category.fromJson(categoryRow);
        this._categories.push(category);

    }
    public  async deleteCategory (categoryId : number) {
         await deleteCategory(categoryId);
        const categories = this._categories.filter(item => item.id !== categoryId)
        this.setCategories(categories);
    }
}