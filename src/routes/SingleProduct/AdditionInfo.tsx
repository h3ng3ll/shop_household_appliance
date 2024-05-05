import { Product } from "models/Product";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomerReview from "./CustomerReview/CustomerReview";
import StarRate from "components/ProductComponent/starRate/starRate";
import { Context } from "index";


const AdditionalInfo: React.FC<{ product: Product }> = ({ product }) => {
    const { t } = useTranslation();

    const [index, setActiveIndex] = useState(0);
    const {devices} = useContext(Context); 

    function onSendReview() {

    }

    function Description() {
        return (
            <div>
                <h3 style={{margin: "0px"}}> {t("product_description")}</h3>
                <p>
                    Название продукта: Стиральная машина XYZ-5000

                    Описание:
                    Стиральная машина XYZ-5000 – это инновационное решение для вашей бытовой стирки. Обладая передовыми технологиями и эргономичным дизайном, она обеспечивает высокое качество стирки, сохраняя при этом энергопотребление на минимальном уровне.

                    Основные характеристики:

                    Емкость барабана: 8 кг
                    Класс энергопотребления: A+++
                    Класс стирки: A
                    Количество программ: 15
                    Технология управления: Цифровой дисплей и кнопочное управление
                    Защита от протечек: Да
                    Система экономии воды: Есть

                    Преимущества:

                    Энергосбережение: Благодаря высокому классу энергопотребления (A+++), стиральная машина XYZ-5000 позволяет существенно сократить расход электроэнергии.
                    Разнообразие программ: С многочисленными программами стирки вы легко найдете оптимальный режим для любых видов тканей и загрязнений.
                    Безопасность: Встроенная система защиты от протечек обеспечивает безопасность ваших помещений при работе стиральной машины.
                    Простота управления: Цифровой дисплей и интуитивно понятное кнопочное управление делают использование машины максимально комфортным.

                    Дополнительная информация:

                    Гарантия: 2 года
                    Производитель: ABC Appliances Inc.
                    Доступные цвета: Белый, серебристый, черный
                </p>
            </div>

        )
    }

    function AdditionalInformation() {
        return (
            <div>
                <h5> {t("how_to_use_the_product")}</h5>
            </div>
        )
    }
   

    function Review() {
        return (
            <div className="write_review_cont">

                <div style={{ display: "flex" }}>
                    <CustomerReview review={devices.getReview(product.product_id)[0]} />
                    <CustomerReview  review={devices.getReview(product.product_id)[1]} />
                    <CustomerReview  review={devices.getReview(product.product_id)[2]} />
                </div>
                <h3> {t("add_review")}</h3>
                <p> {t("your_email_address_wi") + " *"}</p>
                <h4> {t("your_rating") + " *"}</h4>
                <StarRate />

                <h5> {t("upload_images")}</h5>
                <input className="form_input_text_style" placeholder={t("no_file_selected")} type="file" name="" id="" />

                <h5> {t("your_name")}</h5>
                <input className="form_input_text_style" placeholder={t("write_your_name_here") + "*"} type="text" name="" id="" />

                <h5> {t("your_email")}</h5>
                <input className="form_input_text_style" placeholder={t("write_your_email_here") + "*"} type="text" name="" id="" />

                <h5> {t("your_review")}</h5>
                <textarea className="form_input_text_style review_textarea" placeholder={t("write_your_review_here") + "*"} name="" id="" />
                <div style={{ display: "flex" }}>
                    <input type="checkbox" name="" id="" />
                    <h5> {t("save_my_name_email_and_website") + "."}</h5>
                </div>

                <div style={{ height: "20px" }} />
                <button onClick={onSendReview} className="form_button">{t("submit").toUpperCase()} </button>
            </div>
        )
    }


    return (
        <div className="split_menu max-size">
            <div className="split_menu_left">
                <div
                    onClick={() => setActiveIndex(0)}
                    className={(index == 0 ? "active_split_menu_item" : "split_menu_item")}>
                    {t("description")}

                </div>
                <div
                    onClick={() => setActiveIndex(1)}
                    className={(index == 1 ? "active_split_menu_item" : "split_menu_item")}>
                    {t("additional_information")}

                </div>
                <div
                    onClick={() => setActiveIndex(2)}
                    className={(index == 2 ? "active_split_menu_item" : "split_menu_item")}>
                    {t("customer_reviews")}
                </div>
            </div>

            <div className="split_menu_right">
                {index == 0 ? <Description /> : null}
                {index == 1 ? <AdditionalInformation /> : null}
                {index == 2 ? <Review /> : null}
            </div>
        </div>

    )
}

export default AdditionalInfo; 