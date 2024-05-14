import { register } from "http/userApi";
import { AdminUser } from "models/AdminUser";
import { CommonUser } from "models/CommonUser";
import { User } from "models/foundations/User";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ACCOUNT_ROUTE, ADMIN, ADMIN_ROUTE } from "utils/consts";
import { onAuthorization } from "./Account";
import { Context } from "index";
import { Exception } from "sass";
import { useNavigate } from "react-router-dom";


export default function RegisterForm() {

    const { t } = useTranslation()

    const [fullname, setFullName] = useState<string>("");
    const [repeatPasswd, setRepPasswd] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>();

  

    const user = useContext(Context).user

    async function onAuth() {
        try {
            let userData = await onAuthorization(email, password, repeatPasswd, fullname)
            if(userData == null) return ;
            user.setUser(userData as User);
            user.setIsAuth(true);
            
            console.log("done" + user.user)

        } catch (e: any) {
            setErrorMessage(e.response.data.message.toString());

        }

    }

    return (
        <>
            <h5> {t("sign_up_with_email")}</h5>
            <h5> {errorMessage }</h5> 
            <input
                value={fullname}
                onChange={name => setFullName(name.target.value)}
                className="form_input_text_style"
                placeholder={t("your_full_name")}
                type="text" />
            <input
                value={email}
                onChange={email => setEmail(email.target.value)}
                className="form_input_text_style"
                placeholder={t("your_email_address")}
                type="email" />
            <input
                value={password}
                onChange={password => setPassword(password.target.value)}
                className="form_input_text_style"
                placeholder={t("set_your_password")}
                type="password" />
            <input
                value={repeatPasswd}
                onChange={repPasswd => setRepPasswd(repPasswd.target.value)}
                className="form_input_text_style"
                placeholder={t("retype_your_password")}
                type="password" />

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

            <button onClick={() => onAuth()} className="form_button"> {t("sign_up").toUpperCase()}</button>

        </>
    )
}