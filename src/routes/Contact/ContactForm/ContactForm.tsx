
import { useTranslation } from "react-i18next";

import "./ContactForm.scss"
import { office_address, office_email, office_number1, office_number2 } from "utils/intel";

export default function ContactForm() {
    const { t } = useTranslation();

    function onSubmit() {

    }

    return (
        <div className="container">
            <div className="fixed_centered_container grid_container ">

                <div>
                    <h3> {t("contact_information")}</h3>
                    <p> {t("you_can_find_us_and") + "."} </p>
                    <div className="grid_contact_container">
                        <div className="grid_contact_container_content">
                            <h4> {t("office")} </h4>

                            <span> {office_address}</span>
                            <p> {office_number1}</p>
                            <p> {office_number2}</p>
                            <p> {office_email}</p>
                        </div>
                        <div className="grid_contact_container_content">
                            <h4> {t("management")} </h4>
                            <p> {office_address}</p>
                            <p> {office_number1}</p>
                            <p> {office_number2}</p>
                            <p> {office_email}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3> {t("get_in_touch")}</h3>
                    <p> {t("use_the_form_below") + "."} </p>
                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                        <input style={{ marginRight: "2%" }} className="form_input_text_style form_input_style_current" placeholder={t("write_your_name_here")} type="text" />
                        <input style={{ marginLeft: "2%" }} className="form_input_text_style form_input_style_current" placeholder={t("write_your_email_here")} type="text" />
                    </div>
                    <input className="form_input_text_style form_input_style_current" placeholder={t("phone_number")} type="text" />
                    <input className="form_input_text_style form_input_style_current" placeholder={t("write_your_subject_here")} type="text" />
                    <textarea id="text-area" name="message" cols={40} rows={5} className="form_input_text_style form_input_style_current" placeholder={t("write_your_message_here")} />
                    <input onSubmit={() => onSubmit()} className="form_button" type="submit" value={t("submit").toUpperCase()} />
                </div>
            </div>

        </div>
    )
}