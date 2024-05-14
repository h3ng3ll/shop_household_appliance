import { MapBuild } from "components/MapBuild";
import ProductComponent from "components/ProductComponent/ProductComponent";
import { fetchProducts } from "http/productApi";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { Product } from "models/Product";
import { SortFilter } from "models/enum/SortFilter";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";




const ProductsPage = observer(() => {

    const { t } = useTranslation()
    const { devices, filter } = useContext(Context)
    const [totalProducts, changeTotalProducts] = useState(0);

    const limit = filter.limit
    let page = filter.page
    const products = filter.isTurnOffFilter ? devices.products : filter.filteredProducts;


    const sortingEnum: { name: string, value: string, onClick: () => void }[] = [
        {
            name: t("default_sorting"),
            value: "default",
            onClick: () => filter.defaultSorting()
        },
        {
            name: t("name_a_z"),
            value: "name_a_z",
            onClick: () => filter.sortNameAZ()
        },
        {
            name: t("name_z_a"),
            value: "name_z_a",
            onClick: () => filter.sortNameZA()
        },
        {
            name: t("price_low_high"),
            value: "price_low_high",
            onClick: () => filter.sortPriceLowHigh()
        },
        {
            name: t("price_high_low"),
            value: "price_high_low",
            onClick: () => filter.sortPriceHighLow()
        },
        {
            name: t("rating_highest"),
            value: "rating_highest",
            onClick: () => filter.sortRatingHighest()
        },
        {
            name: t("rating_lowest"),
            value: "rating_lowest",
            onClick: () => filter.sortRatingLowest()
        },
        {
            name: t("model_a_z"),
            value: "model_a_z",
            onClick: () => filter.sortModelAZ()
        },
        {
            name: t("model_z_a"),
            value: "model_z_a",
            onClick: () => filter.sortModelZA()
        },
    ]


    useEffect(() => {
        fetchProducts({
            brandId: filter.brandId,
            typeId: filter.typeId,
            supplierId: filter.supplierId,
            categoryId: filter.categoryId,
            priceMax: filter.priceMax,
            priceMin: filter.priceMin,
            page: page,
            limit: filter.limit,
            search: filter.search,

        }).then((products) => {
            const productsList: Product[] = [];

            changeTotalProducts(products['count']);

            (products['rows'] as Array<Record<string, any>>).map((product) => {
                const objType = Product.fromJson(product);
                productsList.push(objType);
            });

            filter.setFilteredProducts(productsList)
            devices.setProducts(productsList)
        })

    }, [filter.brandId, filter.categoryId, filter.limit, filter.priceMax, filter.priceMin, filter.page, filter.typeId, filter.search])


    function onChangePage(page: number) {
        filter.setPage(page);
    }

    function checkLastPage() {
        let maxPages = ((totalProducts / limit!) >> 0)
        if (maxPages == totalProducts/limit!){
            return maxPages
        }
        else {
            return maxPages + 1
        }
    }

    function BuildPagination() {
        return (
            <div className="shop_grid_product_pages">
                <button
                    onClick={_ => (page! - 1 != 0) ? onChangePage(page! - 1) : null}
                    className="icon_btn shop_grid_product_pages_text"> <MdOutlineKeyboardArrowLeft /> </button>
                {[...Array(3)].map((_, index) => {
                    const active = page == page + index  ? "orange" : ""
                   
                    return (
                        <button
                            onClick={_ => page != (index + 1) ? onChangePage(page! + index) : null}
                            value={(page! + index).toFixed()}
                            className={"icon_btn shop_grid_product_pages_text " + active} >
                            {(page! + index).toFixed()}
                        </button>
                    )
                })}
                <button
                    onClick={_ => page! + 1 == checkLastPage() ? onChangePage(page! + 1) : null}
                    className="icon_btn shop_grid_product_pages_text"> <MdOutlineKeyboardArrowRight /> </button>
            </div>
        )
    }
    return (
        <div className="shop_grid_products">
            <div className="shop_grid_products_title">

                {/* Showing  1-9 of 55 results */}
                <h5> {t("showing")} {totalProducts}-{limit} {t("of")} {totalProducts} {t("results")}</h5>
                {/* Default sorting  */}
                <select
                    onChange={(value) => {
                        const index = sortingEnum.map(sorting => sorting.value).indexOf(value.target.value)
                        sortingEnum[index].onClick()
                    }}

                    className="shop_grid_sort_btn no_border" name="fasdf" id="faf">
                    {
                        sortingEnum.map((item) => {
                            return (
                                <option value={item.value}  >
                                    <h5>{item.name}</h5>
                                </option>
                            )
                        })
                    }

                </select>
            </div>
            <div className="shop_grid_products_grids" style={{
                display: "grid",
                gridTemplateColumns: "33% 33% 33%"
            }}>
                {
                    products.map((product) => {
                        return <ProductComponent product={product} />
                    })
                }
            </div>
            {/*  <  1 2 3 > */}

            <BuildPagination />

        </div>
    )
})

export default ProductsPage