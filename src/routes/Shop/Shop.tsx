import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";
import { useTranslation } from "react-i18next";
import "./Shop.scss";
import SuggestedRegForm from "components/SuggestedRegForm/SuggestedRegForm";
import Tail from "components/Tail/Tail";

import { observer } from "mobx-react-lite";
import ProductsPage from "./ProductsPage";
import FilterBanner from "./FilterBanner";

const Shop =  observer (()  => {

  const { t } = useTranslation()


  return (
    <>
      <Header />
      <RouterHeader nameRouter={t("shop")} />
      <div className="shop_grid">
        <div></div>
        <FilterBanner />

        <ProductsPage />
        <div></div>

      </div>


      <SuggestedRegForm />
      <Tail />
    </>
  );
})


export default Shop
