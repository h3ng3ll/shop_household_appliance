import { useTranslation } from "react-i18next";

export default function TransparentButton() {
  const { t } = useTranslation();
  return (
    <button className="transparent_button">
      <span> {t("shop_now").toUpperCase()}</span>
      <img src={require("assets/icons/arrow_right.svg").default} />
    </button>
  );
}
