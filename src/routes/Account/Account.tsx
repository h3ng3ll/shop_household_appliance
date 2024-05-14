import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";

import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import "./Account.scss"
import Tail from "components/Tail/Tail";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { ADMIN } from "utils/consts";
import { AdminUser } from "models/AdminUser";
import { CommonUser } from "models/CommonUser";
import { login, register } from "http/userApi";
import { Context } from "index";
import { User } from "models/foundations/User";
import { observer } from "mobx-react-lite";


export async function onAuthorization(
    email: string,
    password: string,
    repeatPassword?: string,
    fullname?: string
) {


    try {
        if (email == "" || password == "") {
            throw("email or password field is empty")
        };
        
    
        let userData
        let res : Record<string , any> = []
        
        if (repeatPassword == null && fullname == null) {
            /// login
    
            res  = await login(email, password);
        } else {
            /// register
    
            let names = fullname!.split(" ");
            if (!names[1]) {
                throw("You must separate values like that 'Name Surname'")
                
            }
            if (repeatPassword != password) {
                throw("fullname or passwords not maching")
                
            }
            res  = await register(email, password, names[0], names[1]);
    
        }
    
        if (res['role'] === ADMIN) {
            userData = AdminUser.fromJson(res);
        } else {
            userData = CommonUser.fromJson(res);
        }
      
    
        return userData;
    } catch (e) {
        throw(e)
    }

}

const Account =  observer(() =>  {

    const { t } = useTranslation()
    const [isLogin, setIsLogin] = useState<boolean>(false);




    function BuildForm() {
        return (
            <div className="max_size" style={{ margin: "0px auto" }} >

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
                        isLogin ? <LoginForm /> : <RegisterForm />
                    }
                </div>

            </div>
        )
    }

    return <>
        <Header />
        <RouterHeader nameRouter={t("account")} />

        <BuildForm />

        <Tail />
    </>
    
})

export default Account;