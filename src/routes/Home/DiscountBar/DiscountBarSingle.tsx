import TransparentButton from "components/TransparentButton";

import { useTranslation } from "react-i18next"

export default function DiscoutBarSingle() {

    const { t } = useTranslation()
    return (
        <div className="discount_bar">

            <div className="discount_bar_title">
                <span className="orange discount">
                    {t("save off").toUpperCase()} 40 %
                </span>
                <h1 style={{maxWidth: "400px"}}> {t(`${t("clearance_sale")}`)} !!!</h1>
                {/* <h1 className="orange"> {t(`${data.subtitle}`)}</h1> */}
                <TransparentButton text="shop_now" useIcon />
            </div>
            <img className="logo" src="https://s.ek.ua/jpg_zoom1/2460978.jpg" />


        </div>
    )
}