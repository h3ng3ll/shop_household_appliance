
import { useContext, useState } from "react";
import { Context } from "index";
import { useTranslation } from "react-i18next";
import { HOME_ROUTE } from "utils/consts";
import { useNavigate } from "react-router-dom";
import { updateCredentials } from "http/userApi";

export default function ContactInformation() {


    const { t } = useTranslation();
    const navigate = useNavigate();

    const userStore = useContext(Context).user;
    const user = userStore.user!;

    const [firstname, changeName] = useState<string>();
    const [lastname, changeLastname] = useState<string>();



    async function onSubmit() {

        // if(firstname ===  user.name && firstname  === undefined && firstname === "" || 
        // lastname ==  user.surname && lastname  === undefined && lastname === "") return 

        try {
            const newUser = await updateCredentials({
                user_id: user.user_id,
                role: user.role,
                email: user.email,
                name: firstname,
                surname: lastname,
            })

            userStore.setUser(user)
            alert("it's okay")
        } catch (e) {
            console.log(e)
        }

    }

    function onLogOut() {
        userStore.logOut()
        navigate(HOME_ROUTE)
    }



    return (
        <div style={{ margin: "0 auto", justifyContent: "center" }} className="max_size">
            <h3 style={{ textAlign: "center" }}>{t("contact_information")} </h3>
            <div className=" grid_cont">
                <div>
                    <div className="grid-item" > {t("name")}</div>
                    <div className="grid-item" > {t("surname")}</div>
                    <div className="grid-item" > {t("email")}</div>
                    <div className="grid-item"> {t("role")}</div>
                </div>

                <div>
                    <div>
                        <input
                            value={firstname}
                            onChange={e => changeName(e.target.value)}
                            placeholder={t("current_name_is") + " \"" + user.name + "\""}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>
                    <div>
                        <input
                            value={lastname}
                            onChange={e => changeLastname(e.target.value)}
                            placeholder={t("current_surname_is") + " \"" + user.surname + "\""}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>
                    <div className="grid-item" > {t(user.email)}</div>
                    <div className="grid-item"> {t(user.role)}</div>

                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <input onClick={() => onSubmit()} className="form_button sub_button" type="button" value={t("submit")} />

                <input onClick={() => onLogOut()} className="form_button sub_button log_out_btn" type="button" value={t("log_out")} />
            </div>




        </div>
    );
}