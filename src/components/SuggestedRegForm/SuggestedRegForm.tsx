
import { ChangeEvent, ChangeEventHandler } from "react"
import { useTranslation } from "react-i18next"
import { useState } from "react"
// import "index.scss"
import "./SuggestedRegForm.scss"
import { useNavigate } from "react-router-dom"
import { ACCOUNT_ROUTE } from "utils/consts"
export default function SuggestedRegForm() {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>();
    const [password, setPass] = useState();
    const [repeatPassword, setRepPass] = useState();

    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFocusedRepPassword, setIsFocusedRepPass] = useState(false);

    function onSubmit() {
        navigate(ACCOUNT_ROUTE);
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {

    }

    let styles = "form_input_text_style flex "
    let focused = "form_input_text_style_focused"
    return (
        <div className="center_center orangeBG banner_padding">
            <h2 className="no_margin_and_padding"> {t("get")} 20% {t("off")} {t("on")}  </h2>
            <h2 className="orange no_margin_and_padding"> {t("first_purchase")}   </h2>

            <form onSubmit={onSubmit}>

                <input
                    onFocus={() => setIsFocusedEmail(true)}
                    onBlur={() => setIsFocusedEmail(false)}
                    className={styles + (isFocusedEmail ? focused : null)}
                    placeholder={t("enter_your_email_address")}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    className={styles + (isFocusedPassword ? focused : null)}
                    placeholder={t("create_password")}
                    type="text"
                    value={password}
                    onChange={onChange} />
                <input
                    onFocus={() => setIsFocusedRepPass(true)}
                    onBlur={() => setIsFocusedRepPass(false)}
                    className={styles + (isFocusedRepPassword ? focused : null)}
                    placeholder={t("repeat_password")}
                    type="text"
                    value={repeatPassword}
                    onChange={onChange} />

                <input onClick={() => onSubmit()} className="form_button" type="submit" value={t("register_it_now").toUpperCase()} />
            </form>
        </div>
    )
}