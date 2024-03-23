import logo from "assets/icons/logo_BHA.svg";
import searchIcon from "assets/icons/search-icon.webp";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import SelectButton from "components/Header/SelectButton/SelectButton";
import Navigation from "./Navigation/Navigation";

import { useState } from "react";
import Select from "react-select";

export default function Header() {
  const { t } = useTranslation();

  function Logo() {
    const size = 50;
    return (
      <div
        className="center"
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "60px",
        }}
      >
        <img src={logo} alt="logo" width={size} height={size} />

        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <span className="bha_acr"> BHA</span> <br />
          <span className="bha"> Buy House Appliance</span>
        </div>
      </div>
    );
  }

  function SearchBar() {
    return (
      <div
        style={{
          display: "inline-block",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "60px",
        }}
      >
        <input
          style={{
            width: "300px",
            height: "20px",

            // flexGrow: 1,
            padding: "15px",
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "15px",
            backgroundRepeat: "no-repeat",

            backgroundPosition: "right center",
          }}
          type="text"
          placeholder={t("search_for_more_than_ten_thousend_products")}
        />
      </div>
    );
  }

  function Phone() {
    return (
      <div style={{ marginRight: "30px" }}>
        <span className="montserrat, title_text"> {t("phone")}</span>
        <span className="chilanka title_content_text"> +380-###-##-### </span>
      </div>
    );
  }
  function Email() {
    return (
      <div>
        <span className="montserrat, title_text"> {t("email")}</span>
        <span className="chilanka title_content_text">
          BuyHouseApplience@mail.ua
        </span>
      </div>
    );
  }

  function AccountNavigation() {
    const components = ["user", "like", "cart"];

    const img = require("assets/icons/user.svg");
    return (
      <div>
        {components.map((image) => {
          return (
            <img
              className="accNavIcon"
              src={require("assets/icons/" + image + ".svg")}
              alt="cart"
            />
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <div className="header">
        <Logo />
        <SearchBar />
        <Phone />
        <Email />
      </div>
      <div className="underline" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SelectButton />
        <Navigation />
        <AccountNavigation />
      </div>
    </div>

    // <div style={{ display: "flex" }}>
    //   <div className="block">the one</div>
    //   <div className="block">the one</div>
    // </div>
  );
}
