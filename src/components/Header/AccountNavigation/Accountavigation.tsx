

import { ACCOUNT_ROUTE, WISHLIST_ROUTE } from "utils/consts";

import Select from "react-select";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CartDialog from "./CartDialog/CartDialog";

export default function AccountNavigation () {

    const navigate = useNavigate();
    const {i18n} = useTranslation();
    const [language , changeLanguage ] = useState(i18n.language);

    function changeLng () {
      if(language == "ua"){
        i18n.changeLanguage("en");
        changeLanguage("en")
        localStorage.setItem("lng" , "en");
      } else {
        i18n.changeLanguage("ua");
        changeLanguage("ua");
        localStorage.setItem("lng" , "ua");

      }
     
    }
    const components = [
        {
          icon: "user",
          onTap: () => {
            navigate(ACCOUNT_ROUTE)
          }
        },
        {
          icon: "like",
          onTap: () => {
            navigate(WISHLIST_ROUTE)
          }
        },
      ];
  
   
      return (
        <div>
          {components.map((component) => {
            return (
             <button className="icon_btn" onClick={component.onTap}>
               <img
                // className="accNavIcon"
                src={require("assets/icons/" + component.icon + ".svg")}
                alt={component.icon}
              />
             </button>
            );
          })}
           <CartDialog/>
          {
              <button className="icon_btn" onClick={() => changeLng()}> {language}</button>
          }
         
        </div>
      );
}