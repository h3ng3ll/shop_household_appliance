import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import TransparentButton from "components/TransparentButton";

export default function DiscountBar() {
  const { t } = useTranslation();

  interface CarouselItem {
    img: string;
    title: string;
    subtitle: string;
  }

  const items = [
    { img: "washing-machine", title: "best_for", subtitle: "your_family" },
    {
      img: "washing-machine",
      title: "create_comfort_and",
      subtitle: "coziness",
    },
    { img: "washing-machine", title: "saves_time_and", subtitle: "energy" },
  ];

  function BuildCarouselItem(data: CarouselItem) {
    return (
      <div className="discount_bar">
        <img className="logo" src={data.img} />

        <div className="discount_bar_title">
          <span className="orange discount">
            {t("save off").toUpperCase()} 10-20 %
          </span>
          <h1> {t(`${data.title}`)}</h1>
          <h1 className="orange"> {t(`${data.subtitle}`)}</h1>
          <TransparentButton />
        </div>
      </div>
    );
  }

  // let img = require("assets/icons/washing-machine.svg");

  var settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: JSX.Element) => (
      <div
        style={{
          paddingBottom: 20,
          // background: "red",
        }}
      >
        <ul style={{ padding: 10 }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {items.map((item) => (
          <BuildCarouselItem
            img={require(`assets/icons/${item.img}.svg`)}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </Slider>
    </div>
  );
}
