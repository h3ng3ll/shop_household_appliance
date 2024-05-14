




export default class ProductFilter {
    brandId?: number
    typeId?: number
    priceMin?: number
    priceMax?: number
    categoryId? : number
    supplierId? : number
    search? : string
    page?: number
    limit?: number

    constructor(filter: {
        brandId?: number,
        typeId?: number,
        priceMin?: number,
        priceMax?: number,
        page?: number,
        limit?: number,
        categoryId? : number
        search? : string
    }) {
        this.brandId = filter.brandId;
        this.typeId = filter.typeId;
        this.priceMin = filter.priceMin;
        this.priceMax = filter.priceMax
        this.page = filter.page
        this.limit = filter.limit
        this.categoryId = filter.categoryId
        this.search = filter.search
    }

}

