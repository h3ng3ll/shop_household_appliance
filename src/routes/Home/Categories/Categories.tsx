import { Category } from "models/Category";
import React from "react";


import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "routes/Home/Categories/Categories.scss";
import { SHOP_ROUTE } from "utils/consts";

export default function Categories() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

    function onTap () {
      navigate(SHOP_ROUTE);
    }

  function BuildCategories({ category }: { category: Category }) {
    return (
      <div onClick={() =>onTap()}className="category_block">
        <img
          className="category_img"
          src={require(`assets/icons/${category.image}.svg`)}
        />
        <h5> {category.name}</h5>
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
