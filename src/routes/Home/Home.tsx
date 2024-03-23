// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

import Slider from "react-slick";
import Header from "components/Header/Header";
import DiscountBar from "routes/Home//DiscountBar/DiscountBar";
import "routes/Home/Home.scss";
import Categories from "./Categories/Categories";

export default function Home() {
  return (
    <>
      <Header />
      <DiscountBar />
      <Categories />
    </>
  );
}
