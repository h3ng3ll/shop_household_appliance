import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { PageContext } from "index";
import "components/Header/Navigation/Navigation.scss";
// import "components/Header/Navigation/Navigation";

import { useNavigate } from "react-router-dom";
// import { useNavigation, redirect } from "react-router-dom";

// import { useHistory} from "react-router-dom";

export default function Navigation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /// УВАЖНО СМОТРИ НА КВАДРАТНЫЕ СКОБКИ !!!
  const [page, setPage] = useState<String>(useContext(PageContext));


  const navigation = [
    {
      key: "home",
      text: t("home"),
    },
    { key: "page", text: t("page") },
    { key: "shop", text: t("shop") },
    { key: "blog", text: t("blog") },
    { key: "contact", text: t("contact") },
    { key: "offers", text: t("offers") },
  ];

  function pushRoute(route: string) {
    setPage(route);

    navigate(`../${route}`);
  }

  return (
    <div>
      {navigation.map((nav) => (
        <button
          onClick={() => {
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
