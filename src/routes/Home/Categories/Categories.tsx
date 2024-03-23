import React from "react";
import { Category } from "models/foundations/Category";
import { useTranslation } from "react-i18next";
import { SvgXml } from "react-native-svg";
import "routes/Home/Categories/Categories.scss";

export default function Categories() {
  const { t } = useTranslation();

  const description = [
    t("washing_machines"),
    t("microwave_ovens"),
    t("refigerators"),
    t("stoves"),
    t("vacuum_cleaner"),
  ];
  const icons = [
    "washing_machines",
    "microwawe_oven",
    "refrigerator-freezer",
    "stove",
    "vacuum-cleaner",
  ];

  const list: Category[] = Array.from(
    icons.map(
      (_, index) => new Category(index, description[index], icons[index])
    )
  );

  function BuildCategories({ category }: { category: Category }) {
    return (
      <div>
        <div>
          {/* <SvgXml xml="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg" /> */}
          {/* <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`#${"assets/icons/stove.svg"}`} />
          </svg> */}
          {/* <svg xlinkHref={require(`assets/icons/${category.image}.svg`)} /> */}
          <img
            className="category_img"
            src={require(`assets/icons/${category.image}.svg`)}
          />
          {/* <LocalSvg,
            // 
            

            // alt="img"
          /> */}
          {/* <img /> */}
        </div>
        <h3> {category.description}</h3>
      </div>
    );
  }

  return (
    <div className="categories_div">
      {list.map((category: Category) => (
        <BuildCategories key={category.id} category={category} />
      ))}
    </div>
  );
}
