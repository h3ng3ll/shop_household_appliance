// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

import Slider from "react-slick";
import Header from "components/Header/Header";
import DiscountBar from "routes/Home//DiscountBar/DiscountBar";
import "routes/Home/Home.scss";
import Categories from "./Categories/Categories";
import Title from "./Title/Title";
import TransparentButton from "components/TransparentButton";
import ProductComponent from "components/ProductComponent/ProductComponent";
import { Product } from "models/Product";
import { CurrencyUSD } from "models/CurrencyUSD";
import PopularWashingMachines from "./Products/PopularWashingMachines";
import DiscoutBarSingle from "./DiscountBar/DiscountBarSingle";
import SuggestedRegForm from "components/SuggestedRegForm/SuggestedRegForm";
import Tail from "components/Tail/Tail";

export default function Home() {
  const { t } = useTranslation();

  // let product: SellingProduct = new SellingProduct(
  //   "washing machine",
  //   // new CurrencyUSD(18.0),
  //   "https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/i/n/indesit-e2se-2150-w-ua_1.jpg",
  //   false,
  //   5
  // );

  return (
    <div>
      <Header />
      <DiscountBar />


      <div className="padding_container">
        <div className="sizedBox" />

        <Categories />
        <div className="sizedBox" />
        <div className="sizedBox" />

        <Title
          title={t("washing_machines")}
          children={<TransparentButton text={t("view_all")} useIcon />}
        />
        <div className="sizedBox" />

        <PopularWashingMachines />
        <div className="sizedBox" />
        <div className="sizedBox" />

        <Title
          title={t("refigerators")}
          children={<TransparentButton text={t("view_all")} useIcon />}
        />
        <div className="sizedBox" />
        <PopularWashingMachines />

      </div>
        <DiscoutBarSingle/>
        <SuggestedRegForm/>

        <Tail/>
    </div>
  );
}
