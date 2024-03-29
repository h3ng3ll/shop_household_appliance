import { useTranslation } from "react-i18next";

const TransparentButton: React.FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <button className="transparent_button">
      <span> {t(text).toUpperCase()}</span>
      <img src={require("assets/icons/arrow_right.svg").default} />
    </button>
  );
};

export default TransparentButton;
