import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";

import { useTranslation } from "react-i18next";
import "./Admin.scss"
import { useContext } from "react";
import { Context } from "index";
import Tail from "components/Tail/Tail";

export default function Admin() {

    const { t } = useTranslation();
    const user = useContext(Context).user.user;
    
    const devices = useContext(Context).devices;

  
    return <>
        <Header />
        <RouterHeader nameRouter={t("admin")} />


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
                            placeholder={t("current_name_is") + " \"" + user.name + "\""}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>
                    <div>
                        <input
                            placeholder={t("current_surname_is") + " \"" + user.surname + "\""}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>
                    <div className="grid-item" > {t(user.email)}</div>
                    <div className="grid-item"> {t(user.role)}</div>

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input className="form_button sub_button" type="button" value={t("submit")} />
            </div>




        </div>
        <div style={{ margin: "0 auto", justifyContent: "center" }} className="max_size">

            <h3 style={{ textAlign: "center" }}>{t("add_product")} </h3>
            <div className=" grid_cont">
                <div>
                    <div className="grid-item" > {t("name")}</div>
                    <div className="grid-item" > {t("model_name")}</div>
                    <div className="grid-item" > {t("price")}</div>
                    <div className="grid-item" > {t("image")}</div>
                    <div className="grid-item" > {t("type")}</div>
                    <div className="grid-item" > {t("brand")}</div>
                    <div className="grid-item" > {t("supplier")}</div>
                </div>
                <div>

                    <div>
                        <input
                            placeholder={t("product_name")}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>

                    <div>
                        <input
                            placeholder={t("product_modelname")}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>

                    <div>
                        <input
                            placeholder={t("product_price")}
                            className="form_input_text_style grid-item"
                            type="text"
                        />
                    </div>

                    <div>
                        
                        <input
                            placeholder={t("product_price")}
                            className="form_input_text_style grid-item"
                            type="file"
                        />
                    </div>
                    <div>
                        
                        <select
                            className="form_input_text_style grid-item"
                        > 
                        {devices.types.map((type) => {
                            return <option id={type.type_id.toString()} value={type.type_id.toString()}> {type.name}</option>
                        })}
                        </select>
                    </div>
                    <div>
                        
                        <select
                            className="form_input_text_style grid-item"
                        > 
                        {devices.brands.map((brand) => {
                            return <option id={brand.brand_id.toString()} value={brand.brand_id.toString()}> {brand.name}</option>
                        })}
                        </select>
                    </div>
                    <div>
                        
                        <select
                            className="form_input_text_style grid-item"
                        > 
                        {devices.suppliers.map((supplier) => {
                            return <option id={supplier.supplier_id.toString()} value={supplier.supplier_id.toString()}> {supplier.name}</option>
                        })}
                        </select>
                    </div>
                </div>
                
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input className="form_button sub_button" type="button" value={t("add_product")} />
            </div>
        </div>

        <Tail />
    </>
}