import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";

import { useTranslation } from "react-i18next";
import "./Admin.scss"

import Tail from "components/Tail/Tail";


import AddProductForm from "./AddProductForm";
import ContactInformation from "./ContactInformation";
import { useContext } from "react";
import { Context } from "index";


function Admin() {
    const isAdmin = useContext(Context).user.user?.role === process.env.ADMIN
    const { t } = useTranslation();


    return <>
        <Header />
        <RouterHeader nameRouter={t("admin")} />
        <ContactInformation />

        { isAdmin &&  <AddProductForm />}

        <Tail />
    </>
}

export default Admin