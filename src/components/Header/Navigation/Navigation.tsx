import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { PageContext } from "index";
import "components/Header/Navigation/Navigation.scss";
// import "components/Header/Navigation/Navigation";

import { useNavigate, useParams } from "react-router-dom";
import { CONTACT_ROUTE, HOME_ROUTE, SHOP_ROUTE } from "utils/consts";
// import { useNavigation, redirect } from "react-router-dom";

// import { useHistory} from "react-router-dom";

export default function Navigation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [page, setPage] = useState<String>(useContext(PageContext));
  const params = useParams()

  const navigation = [
    {
      key: HOME_ROUTE,
      text: t("home"),
    },
    // { key: "page", text: t("page") },
    { key: SHOP_ROUTE, text: t("shop") },
    // { key: "blog", text: t("blog") },
    { key: CONTACT_ROUTE, text: t("contact") },
    // { key: "offers", text: t("offers") },
  ];

  function pushRoute(route: string) {
    // setPage(route);
    navigate(route);
  }

  return (
    <div>
      {navigation.map((nav) => (
        <button
          onClick={() => {
            setPage(nav.key);
            pushRoute(nav.key);
          }}
          className={nav.key === page ? "icon_btn nav_button_active" : "icon_btn"}
          key={nav.key}
        >
          {nav.text}
        </button>
      ))}
    </div>
  );
}
