// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

import Header from "components/Header/Header";
import DiscountBar from "routes/Home//DiscountBar/DiscountBar";
import "routes/Home/Home.scss";
import Categories from "./Categories/Categories";
import Title from "./Title/Title";
import TransparentButton from "components/TransparentButton";
import PopularWashingMachines from "./Products/PopularWashingMachines";
import DiscoutBarSingle from "./DiscountBar/DiscountBarSingle";
import SuggestedRegForm from "components/SuggestedRegForm/SuggestedRegForm";
import Tail from "components/Tail/Tail";

export default function Home() {
  const { t } = useTranslation();


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
