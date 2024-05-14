
import { login, register } from "http/userApi";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { User } from "models/foundations/User";
import { onAuthorization } from "./Account";
import { Context } from "index";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "utils/consts";

export default function LoginForm() {


    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { t } = useTranslation()
    const user = useContext(Context).user
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>();

    async function onAuth() {
        try {
            let userData = await onAuthorization(email, password)

            user.setUser(userData as User);
            user.setIsAuth(true);
            console.log("isAuth is " + user.isAuth);
            // console.log("donedfljsdalkfsdasdfj;kfasdjkl;sfadjksdfj")
            // console.log("done" + user.user)
            // navigate(ADMIN_ROUTE)
        } catch (e: any) {
            setErrorMessage(e.response.data.message.toString());
        }
    }


    return (
        <>
            <h5> {t("log_in_with_email")}</h5>
            <h5> {errorMessage }</h5> 
            <form action="">
                <input
                    value={email}
                    key="email"

                    onChange={e => setEmail(e.target.value)}
                    className="form_input_text_style"
                    placeholder={t("enter_email_address")}
                    type="email" />
                <input
                    key="password"

                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form_input_text_style"
                    placeholder={t("enter_password")}
                    type="password" />
            </form>

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

            <button onClick={() => onAuth()} className="form_button"> {t("log_in").toUpperCase()}</button>
        </>
    )
}