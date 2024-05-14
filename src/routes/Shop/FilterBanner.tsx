import { buildTags } from "components/MapBuild";
import { useEffect,} from "react";
import { useTranslation } from "react-i18next";
import { fetchAllCategories, fetchBrands,  fetchSuppliers, fetchTypes } from "http/productApi";
import { Type } from "models/Type";
import { Brand } from "models/Brand";
import { Supplier } from "models/Supplier";
import { useContext } from "react";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { Category } from "models/Category";

const FilterBanner = observer(() => {

    const { devices ,filter} = useContext(Context)
    const { t } = useTranslation()
    const timeOutToDB = 5000

    useEffect(() => {

        fetchTypes().then((types) => {

            const typesList: Type[] = [];
            (types as Array<Record<string, any>>).map((type) => {
                const objType = Type.fromJson(type);
                typesList.push(objType);
            });
            devices.setTypes(typesList)

        })

        fetchBrands().then((brands) => {
            const brandsList: Brand[] = [];
            (brands as Array<Record<string, any>>).map((brand) => {
                const objType = Brand.fromJson(brand);
                brandsList.push(objType);
            });
            devices.setBrands(brandsList)
        })

        fetchAllCategories().then((categories) => {
            const categoryList: Category[] = [];
            (categories as Array<Record<string, any>>).map((category) => {
                const objType = Category.fromJson(category);
                categoryList.push(objType);
            });
            devices.setCategories(categoryList)
        })

        fetchSuppliers().then(suppliers => {
            const suppliersList: Supplier[] = [];
            (suppliers as Array<Record<string, any>>).map((supplier) => {
                const objType = Supplier.fromJson(supplier);
                suppliersList.push(objType);
            });
            devices.setSuppliers(suppliersList)
        })
       
    }, [])

    function SearchBar () {
        return (
            <input
            onChange={(e) => {setTimeout(() => { filter.setSearch(e.target.value)} , timeOutToDB) }}
            className="form_button_search , search_product_btn"
            type="text"
            placeholder={t("search_for_products")}
        />
        )
    }

    
    return (
        <div className="shop_grid">
            <div></div>
            <div className="shop_grid_menu">

               <SearchBar/>

                <button onClick={() => filter.reset()} className="icon_btn">
                    {t("reset")}
                </button>
                <div >
                    <h4>{t("types")} </h4>
                    {
                        buildTags(
                            devices.types.map((type) => ({
                                name: t(type.name),
                                value: type.type_id.toString(),
                                isActive: filter.typeId === type.type_id
                            })),
                            (type_id: string) => {
                                filter.setTypeId(parseInt(type_id))
                            })
                    }
                </div>

                <div >
                    <h4>{t("categories")} </h4>
                    {buildTags(
                        devices.categories.map((category) => ({
                            name: category.name!,
                            value: category.id.toString(),
                            isActive: filter.categoryId === category.id
                        })),
                        (category: string) => { filter.setCategoryId(parseInt(category)) }
                    )}
                </div>

                <div >
                    <h4>{t("brands")} </h4>
                    {
                        buildTags(
                            devices.brands.map((brand) => ({
                                name: brand.name,
                                value: brand.brand_id.toString(),
                                isActive: filter.brandId == brand.brand_id
                            })),
                            (brand_id: string) => { filter.setBrandId(parseInt(brand_id)) })
                    }
                </div>

                <h4>{t("filter_by_price")} </h4>
                <div className="form_price">

                    <input
                        onChange={(e) => { return setTimeout(() => { filter.setPriceMin(parseInt(e.target.value)) }, timeOutToDB) }}
                        placeholder={t("min")}
                        className="form_button_search inblock"
                        type="text" />

                    <input
                        onChange={(e) => { return setTimeout(() => { filter.setPriceMax(parseInt(e.target.value)) }, timeOutToDB) }}
                        placeholder={t("max")}
                        className="form_button_search inblock"
                        type="text" />
                </div>

            </div>
        </div>
    )

})

export default FilterBanner;