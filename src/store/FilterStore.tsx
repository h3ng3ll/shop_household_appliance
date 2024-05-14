import { makeAutoObservable } from "mobx";
import { Product } from "models/Product";
import { SortFilter } from "models/enum/SortFilter";


export default class FilterStore {

    private _brandId?: number
    private _typeId?: number
    private _supplierId?: number
    private _priceMin?: number
    private _priceMax?: number
    private _categoryId? : number
    private _page: number 
    private _limit?: number
    private _search? : string
    
    private _sortCategory : SortFilter 
    private _filteredProducts : Product[]

    constructor () {
        this._limit = 9 ; 
        this._page = 1 ;
        this._filteredProducts= [];
        this._sortCategory = SortFilter.none; 
        makeAutoObservable(this);
    }
   
    defaultSorting() { this._sortCategory = SortFilter.none}

    sortNameAZ () {
        const product = this._filteredProducts.sort((one , two) => one.name.localeCompare(two.name))
        this._filteredProducts = product;
        this._sortCategory = SortFilter.modelAZ
    }
    sortNameZA () {
        const product = this._filteredProducts.sort((one , two) => two.name.localeCompare(one.name))
        this._filteredProducts = product;
        this._sortCategory = SortFilter.modelZA
    }
    sortPriceLowHigh(){
        const product = this._filteredProducts.sort((one , two)=> one.price - two.price)
        this._filteredProducts = product;
        this._sortCategory = SortFilter.priceHL
    }
    sortPriceHighLow(){
        const product = this._filteredProducts.sort((one , two)=> two.price - one.price)
        this._filteredProducts = product;
        this._sortCategory = SortFilter.priceLH
    }
    sortRatingHighest(){
        const product = this._filteredProducts.sort((one , two) => one.raiting - two.raiting)
        this._filteredProducts = product;
        this._sortCategory = SortFilter.ratingHL
    }
    sortRatingLowest(){
       const product = this._filteredProducts.sort((one , two) => two.raiting - one.raiting) 
       this._filteredProducts = product;
       this._sortCategory = SortFilter.ratingLH
    }
    sortModelAZ(){
       const product = this._filteredProducts.sort((one , two) => one.model_name.localeCompare(two.name))
       this._filteredProducts = product;
       this._sortCategory = SortFilter.modelAZ
    }
    sortModelZA(){
       const product = this._filteredProducts.sort((one , two) => two.model_name.localeCompare(one.name))
       this._filteredProducts = product;
       this._sortCategory = SortFilter.modelZA
    }

    reset () {
        this._typeId = undefined
        this._brandId = undefined
        this._supplierId = undefined
        this._categoryId = undefined
        this._priceMax = undefined
        this._priceMin = undefined
        this._search = undefined
        this._page = 1
    }
    
    setTypeId (typeId : number) {
        this._typeId = typeId;
    }
    
    setBrandId (brand_id : number) {
        this._brandId = brand_id
    }
    setSupplierId (supplier_id : number) {
        this._supplierId = supplier_id
    }
    setCategoryId (category_id : number) {
        this._categoryId  = category_id
    }
    setPriceMax (priceMax: number) {
        this._priceMax  = priceMax
    }
    setPriceMin (priceMin : number) {
        this._priceMin  = priceMin
    }

    setSearch (search: string) {
        this._search = search;
    }
    setFilteredProducts (products: Product[]) {
        this._filteredProducts = products;
    }

    setPage(page : number){
        this._page = page;
    }

    get typeId() {return this._typeId;}

    get brandId () {return this._brandId;}

    get supplierId () {return this._supplierId;}

    get categoryId () { return this._categoryId;}

    get page () { return this._page;}

    get limit () { return this._limit;}

    get priceMax () { return this._priceMax;}

    get priceMin () { return this._priceMin; }

    get search () { return this._search;}

    get filteredProducts () { return this._filteredProducts;}

    get isTurnOffFilter () {return   this._sortCategory == SortFilter.none }
}