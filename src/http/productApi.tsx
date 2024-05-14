
import { Type } from "models/Type"
import { $authHost, $host } from "./index"
import { SingleProductFilter } from "models/interfaces/SingleProductFilter"
import { Product } from "models/Product"
import { ProductPrototype } from "models/interfaces/ProductPrototype"
import { BrandPrototype } from "models/interfaces/BrandPrototype"
import { Brand } from "models/Brand"
import { Supplier } from "models/Supplier"
import { SupplierPrototype } from "models/interfaces/SupplierPrototype"
import { Basket } from "models/interfaces/Basket"
import { BasketProduct } from "models/BasketProduct"
import ProductFilter from "models/interfaces/ProductFilter"


// 
// PRODUCT
// 

export const createProduct = async (product : ProductPrototype) => {

    const formData = new FormData();


    formData.append("model_name" , product.model_name)
    formData.append("name" , product.name)
    formData.append("price" , product.price.toString())
    formData.append("supplier_id" , product.supplier_id.toString())
    formData.append("brand_id" , product.brand_id.toString())
    formData.append("type_id" , product.type_id.toString())
    formData.append("category_id" , product.category_id.toString())
    if(product.details) formData.append("details" , product.details)

    formData.append("img" , product.img)

    const { data } = await $authHost.post("api/product/create",  formData , {
        headers: {
            "Content-Type": "multipart/form-data",
          },
    } )
    return data; 
}

export const fetchProducts = async (filter?: ProductFilter) => {
    const { data } = await $host.post("api/product/getAll",
        {
            brandId: filter?.brandId,
            page: filter?.page,
            limit: filter?.limit,
            typeId: filter?.typeId,
            priceMin : filter?.priceMin,
            priceMax : filter?.priceMax,
            categoryId : filter?.categoryId, 
            supplierId : filter?.supplierId,
            searchQuery: filter?.search
        })
    return data;
}

export const fetchProduct = async (filter: SingleProductFilter) => {
    const { data } = await $host.post("api/product/getOne/" + filter.product_id,)
    return data;
}

//
//  TYPE 
// 

export const createType = async (typeName : {typeName: string}): Promise<Record<string, any>> => {
    const { data } = await $authHost.post("api/type/create", { name: typeName.typeName });
    return data;
}

export const fetchTypes = async (type?: Type) => {
    const { data } = await $host.post("api/type/getAll",
        {
            type_id: type?.type_id,
            name: type?.name,
        })
    return data;
}

export const fetchType = async (type_id: number) => {
    const { data } = await $host.get("api/type/" + type_id)
    return data;
}
export const deleteType = async (type_id: number) => {
    const { data } = await $authHost.delete("api/type/" + type_id )
    return data;
}

///
/// Brands
///

export const createBrand = async (brand : BrandPrototype) => {
    const { data } = await $authHost.post("api/brand/create",
        {
            name : brand.name,
            country_of_origin : brand.country_of_origin,
            established_year : brand.established_year
        }
    )
    return data; 
}
export const fetchBrands = async (brand? : Brand) => {
    const { data } = await $host.post("api/brand/getAll",
        {
            name : brand?.name,
            id : brand?.brand_id
        }
    )
    return data; 
}
export const fetchBrand = async (brand_id : number) => {
    const { data } = await $host.get("api/brand/getOne/" + brand_id, )
    return data; 
}

export const deleteBrand = async (brand_id : number) => {
    const { data } = await $authHost.delete("api/brand/" + brand_id, )
    return data; 
}

///
/// SUPPLIES
///

export const createSupplier = async (supplier : SupplierPrototype) => {
    const { data } = await $authHost.post("api/supplier/create",
        {
            name : supplier.name,
            country_of_origin : supplier.country_of_origin,
            isActive : supplier.isActive,
            contact_email : supplier.contact_email
        }
    )
    return data; 
}
export const fetchSuppliers = async (supplier? : Supplier) => {
    const { data } = await $host.post("api/supplier/getAll",
        {
            name : supplier?.name,
            supplier_id : supplier?.supplier_id
        }
    )
    return data; 
}
export const fetchSupplier = async (supplier_id : number) => {
    const { data } = await $host.get("api/supplier/getOne/" + supplier_id, )
    return data; 
}

export const deleteSupplier = async (supplier_id : number) => {
    const { data } = await $authHost.delete("api/supplier/" + supplier_id, )
    return data; 
}

///
/// BASKETS == WISHLIST
///

export const addProductToBasket = async (basketId : number , productId : number  ) => {
    const { data } = await $host.post("api/basket/create",
        { basketId, productId }
    )
    return data; 
}

export const getAllProductsFromBasket = async (basket_product_id : number, page? : number  , limit? : number) => {
    const { data } = await $host.post("api/basket/getAll",
        {
            basketBasketId : basket_product_id,
            page : page, 
            limit: limit ,
        }
    )
    return data; 
}

export const deleteProductFromBasket = async (basketBasketId : number , product_id : number) => {
    const { data } = await $host.post("api/basket/delete/" , {
        basketBasketId,
        product_id 
    }  )
    return data;  
}

///
/// CART
///

export const addProductToCart = async ( basketBasketId : number , productProductId : number ,) => {
    const { data } = await $host.post("api/cart/create",
        {  productProductId,  basketBasketId }
    )
    return data; 
}

export const getAllProductsFromCart = async (basketBasketId : number ) => {
    const { data } = await $host.post("api/cart/getAll",{basketBasketId})
    return data; 
}

export const deleteProductFromCart = async (basketBasketId : number , productProductId : number) => {
    const { data } = await $host.post("api/cart/delete/" ,   {basketBasketId, productProductId} )
    return data;  
}


///
/// CATEGORIES
///

export const createCategory = async (name : string ) => {
    const { data } = await $authHost.post("api/category/create",{ name })
    return data; 
}

export const fetchAllCategories = async () => {
    const { data } = await $host.get("api/category/getAll",)
    return data; 
}

export const deleteCategory = async (categoryId : number) => {
    const { data } = await $authHost.delete("api/category/" + categoryId  )
    return data;  
}