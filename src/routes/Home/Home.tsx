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
import ProductBar from "components/ProductBar/ProductBar";
import { SellingProduct } from "models/SellingProduct";
import { CurrencyUSD } from "models/CurrencyUSD";

export default function Home() {
  const { t } = useTranslation();

  let product: SellingProduct = new SellingProduct(
    "washing machine",
    new CurrencyUSD(18.0),
    "https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/i/n/indesit-e2se-2150-w-ua_1.jpg",
    false,
    5
  );
  return (
    <>
      <Header />
      <DiscountBar />
      <Categories />
      <Title
        title={t("washing_machines")}
        children={<TransparentButton text={t("view_all")} />}
      />
      {/* <ProductBar/> */}
    </>
  );
}
