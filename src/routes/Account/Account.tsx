import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Account.scss"
import Tail from "components/Tail/Tail";

export default function Account() {

    const { t } = useTranslation()
    const [isLogin, setIsLogin] = useState<boolean>();


    function loginForm() {
        return (
            <>
                <h5> {t("log_in_with_email")}</h5>
                <input className="form_input_text_style" placeholder={t("enter_email_address")} type="text" />
                <input className="form_input_text_style" placeholder={t("enter_password")} type="text" />

                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 0px " }}>

                    <span>
                        <input type="checkbox" name="" id="" />
                        {t("remember_me")}
                    </span>

                    <span>
                        <button id="forgot_passwd" className="icon_btn">
                            {t("forgot_password") + "?"}

                        </button>
                    </span>
                </div>

                <button className="form_button"> {t("log_in").toUpperCase()}</button>
            </>
        )
    }

    function register_form() {
        return (
            <>
                <h5> {t("sign_up_with_email")}</h5>
                <input className="form_input_text_style" placeholder={t("your_full_name")} type="text" />
                <input className="form_input_text_style" placeholder={t("your_email_address")} type="text" />
                <input className="form_input_text_style" placeholder={t("set_your_password")} type="text" />
                <input className="form_input_text_style" placeholder={t("retype_your_password")} type="text" />

                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 0px " }}>

                    <span>
                        <input type="checkbox" name="" id="" />
                        {t("remember_me")}
                    </span>

                    <span>
                        <button id="forgot_passwd" className="icon_btn">
                            {t("forgot_password") + "?"}

                        </button>
                    </span>
                </div>

                <button className="form_button"> {t("sign_up").toUpperCase()}</button>

            </>
        )
    }


    function BuildForm() {
        return (
            <div style={{ maxWidth: "1100px", margin: "0px auto" }} >

                <div id="container">
                    <h3 className="title_form_container">
                        <button onClick={() => setIsLogin(true)} id="form_btn" className={"icon_btn" + (isLogin ? " form_active_btn" : "")}>
                            {t("log_in").toUpperCase()}
                        </button>

                        <button onClick={() => setIsLogin(false)} id="form_btn" className={"icon_btn" + (isLogin ? "" : " form_active_btn")}>
                            {t("sign_up").toUpperCase()}
                        </button>


                    </h3>

                </div>

                <div className="underline" />

                <div id="padding">

                    {
                        isLogin ? loginForm() : register_form()
                    }
                </div>

            </div>
        )
    }

    return <>
        <Header />
        <RouterHeader nameRouter={t("account")} />

        <BuildForm />

        <Tail/>
    </>
}