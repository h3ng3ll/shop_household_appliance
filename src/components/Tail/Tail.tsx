
import Logo from "components/Header/Logo"
import { buildTags } from "components/MapBuild"
import React, { Component } from "react"
import "./Tail.scss"
import { useTranslation } from "react-i18next"
import sendIcon from "assets/icons/telegram.svg"
import { ABOUT_ROUTE, CHECKOUT_ROUTE, CONTACT_ROUTE, DELIVERY_INFO_ROUTE, FAQs_ROUTE, HOME_ROUTE, OFFERS_ROUTE, PAYMENT_ROUTE, RETURN_REFUNDS_ROUTE, SERVICES_ROUTE } from "utils/consts"
import { ImTelegram } from "react-icons/im";
import { FaFacebookF, FaFolder, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Tail() {

    const { t } = useTranslation()

    const quick_links = [
        { value: HOME_ROUTE, name: t("home") },
        { value: ABOUT_ROUTE, name: t("about_us") },
        { value: OFFERS_ROUTE, name: t("offer") },
        { value: SERVICES_ROUTE, name: t("services") },
        { value: CONTACT_ROUTE, name: t("contact_us") },
    ]

    const help_center = [
        { value: FAQs_ROUTE, name: t("faqs") },
        { value: PAYMENT_ROUTE, name: t("payment") },
        { value: RETURN_REFUNDS_ROUTE, name: t("return_refunds") },
        { value: CHECKOUT_ROUTE, name: t("checkout") },
        { value: DELIVERY_INFO_ROUTE, name: t("delivery_information") },
    ]

    const soc_networks = [
        { component: FaFacebookF, link: "facebook" },
        { component: FaTwitter, link: "twitter" },
        { component: FaPinterest, link: "pinterest" },
        { component: FaInstagram, link: "instagram" },
        { component: FaYoutube, link: "youtube" },
    ]
    function goRoute(route: string) {

    }



    return (
        <div className="main_container">
            <div className="tail_grid fixed_centered_container">
                {/* <div /> */}

                <div >
                    <Logo />
                    <p className="subtitle"> {t("subscribe_to_our_newsletter")}</p>

                    <div className="soc_networks">
                        {
                            soc_networks.map((soc_network, index) => {
                                return <a href={"https://" + soc_network.link + ".com"}>
                                    <div className="soc_networks_container">
                                        <soc_network.component className="soc_networks_icon" />
                                    </div>
                                </a>
                            })
                        }

                    </div>


                </div>

                <div >
                    <h3>{t("quick_links")} </h3>
                    {
                        buildTags(quick_links, (route: string) => {
                            console.log("route: " + route)
                            /// navigate to route
                        })
                    }
                </div>

                <div >
                    <h3>{t("help_center")} </h3>
                    {
                        buildTags(help_center, (route: string) => {
                            console.log("route: " + route)
                            /// navigate to route
                        })
                    }
                </div>

                <div >
                    <h3>{t("our_newsletter")} </h3>

                    <p className="subtitle"> {t("subscribe_to_our_newsletter")}</p>

                    <div className="form_button_search enter_email_btn">
                        <input placeholder={t("enter_your_email_here")} className="form_enter_email" type="text" />
                        <img width="40px" src={sendIcon} className="enter_email_icon_btn" alt="" />

                    </div>


                </div>

                {/* <div /> */}
            </div>


        </div>
    )
}