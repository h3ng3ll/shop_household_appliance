import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";
import { useTranslation } from "react-i18next";
import "./Shop.scss";
import { useContext } from "react";
import { Context } from "index";
import ProductComponent from "components/ProductComponent/ProductComponent";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import SuggestedRegForm from "components/SuggestedRegForm/SuggestedRegForm";
import Tail from "components/Tail/Tail";
import { MapBuild, buildTags } from "components/MapBuild";

export default function Shop() {

  const { t } = useTranslation()



  // function buildTags(values: MapBuild[]) {
  //   return values.map((value: MapBuild) => {
  //     return <button className="icon_btn shop_grid_menu_category_item" id={value.value}>  {value.name} </button>
  //   })
  // }

  const categories: MapBuild[] = [
    {
      name: t("all"),
      value: "all",
    },
    {
      name: t("oven"),
      value: "oven",
    },
    {
      name: t("dishwasher"),
      value: "dishwasher",
    },
    {
      name: t("toaster"),
      value: "toaster",
    },
    {
      name: t("heater"),
      value: "heater",
    },
  ]
  const tags: MapBuild[] = [
    {
      name: t("all"),
      value: "all",
    },
  ]
  const brans: MapBuild[] = [
    {
      name: "Samsung",
      value: "samsung",
    },
    {
      name: "Bosch",
      value: "bosch",
    },
    {
      name: "Philips",
      value: "philips",
    },

  ]

  let startOffsetIndex = 1
  let productOnPage = 9

  let totalProducts = 55
  let page: number = (startOffsetIndex / productOnPage + 1)
  let totalPages = totalProducts / productOnPage
  console.log("page is " + page)

  const sortingEnum: MapBuild[] = [
    {
      name: t("default_sorting"),
      value: "default",
    },
    {
      name: t("name_a_z"),
      value: "name_a_z",
    },
    {
      name: t("name_z_a"),
      value: "name_z_a",
    },
    {
      name: t("price_low_high"),
      value: "price_low_high",
    },
    {
      name: t("price_high_low"),
      value: "price_high_low",
    },
    {
      name: t("rating_highest"),
      value: "rating_highest",
    },
    {
      name: t("rating_lowest"),
      value: "rating_lowest",
    },
    {
      name: t("model_a_z"),
      value: "model_a_z",
    },
    {
      name: t("model_z_a"),
      value: "model_z_a",
    },
  ]

  /// all products no filter 
  const products = useContext(Context).devices.products

  // const 
  return (
    <>
      <Header />
      <RouterHeader nameRouter={t("shop")} />

      <div className="shop_grid">
        <div></div>
        <div className="shop_grid_menu">

          <input
            className="form_button_search , search_product_btn"
            type="text"
            placeholder={t("search_for_products")}
          />

          <div className="shop_grid_menu_category">
            <h4>{t("categories")} </h4>
            {buildTags(
              categories,
              (argument: string) => {
                /// return category 
              }
            )}
          </div>
          <div >
            <h4>{t("tags")} </h4>
            {buildTags(tags,
              (argument: string) => {
                /// return tag 
              })}
          </div>
          <div >
            <h4>{t("brands")} </h4>
            {buildTags(brans,
              (argument: string) => {
                /// return brand 
              }
            )}
          </div>
          <h4>{t("filter_by_price")} </h4>
          <div className="form_price">

            <input placeholder={t("min")} className="form_button_search inblock" type="text" />
            <input placeholder={t("max")} className="form_button_search inblock" type="text" />
          </div>
        </div>
        <div className="shop_grid_products">
          <div className="shop_grid_products_title">
            <h5> {t("showing")} {startOffsetIndex}-{productOnPage} {t("of")} {totalProducts} {t("results")}</h5>
            <select className="shop_grid_sort_btn no_border" name="fasdf" id="faf">
              {
                sortingEnum.map((item) => {
                  return <option value={item.value}> <h5>{item.name}</h5> </option>
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
                return ProductComponent(product)
              })
            }
          </div>
          {/*  <  1 2 3 > */}

          <div className="shop_grid_product_pages">
            <button className="icon_btn shop_grid_product_pages_text"> <MdOutlineKeyboardArrowLeft /> </button>
            {[...Array(3)].map((value, index) => {
              return <button value={(page + index).toFixed()} className="icon_btn shop_grid_product_pages_text"> {(page + index).toFixed()} </button>
            })}
            <button className="icon_btn shop_grid_product_pages_text"> <MdOutlineKeyboardArrowRight /> </button>
          </div>

        </div>
        <div></div>
      </div>
      <SuggestedRegForm />
      <Tail />
    </>
  );
}
