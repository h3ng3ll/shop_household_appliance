import { Component } from "react";
import { useTranslation } from "react-i18next";


const TransparentButton: React.FC<{
  text?: string,
  useIcon?: boolean,
  icon?: string
}> = ({ text, useIcon , icon}) => {
  const { t } = useTranslation();
  return (
    <button className="transparent_button">
      {text != null ? <span> {t(text).toUpperCase()}</span> : null}
      {useIcon === true ? <img src={require("assets/icons/" +  (icon !=null ? icon : "arrow_right") +".svg")} /> : null}
    </button>
  );
};

export default TransparentButton;
