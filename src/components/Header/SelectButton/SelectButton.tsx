import React, { ReactEventHandler } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import "./SelectButton.scss";
export default function SelectButton() {
  const { t } = useTranslation();

  // const [category, setState] = useState(t("shop_by_categories"));
  const categories = [
    { value: "shop_by_categories", label: t("shop_by_categories") },
    { value: "oven", label: t("oven") },
    { value: "dryer", label: t("dryer") },
    { value: "dishwasher", label: t("dishwasher") },
    { value: "toaster", label: t("toaster") },
    { value: "heater", label: t("heater") },
  ];

  function onSelect (value : string ) {

  }
 
  return (
    <select className="no_border select_btn" name="flsd" id="flskjd" >
        {
          categories.map((category) => {
            return <option onSelect={() => onSelect(category.value)} value={category.value}> {category.label}</option>
          })
        }
      </select>
  );
}
