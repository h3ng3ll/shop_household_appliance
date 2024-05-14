import { Component } from "react";
import { useTranslation } from "react-i18next";


const TransparentButton: React.FC<{
  text?: string,
  useIcon?: boolean,
  icon?: string,
  classNames?: string, 
  onClick? : () => void
}> = ({ text, useIcon , icon , onClick , classNames}) => {
  const { t } = useTranslation();
  return (
    <button onClick={onClick} className={"transparent_button " + classNames}>
      {text != null ? <span> {t(text).toUpperCase()}</span> : null}
      {useIcon === true ? <img src={require("assets/icons/" +  (icon !=null ? icon : "arrow_right") +".svg")} /> : null}
    </button>
  );
};

export default TransparentButton;
