import searchIcon from "assets/icons/search-icon.webp";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import SelectButton from "components/Header/SelectButton/SelectButton";
import Navigation from "./Navigation/Navigation";


import Logo from "./Logo";
import AccountNavigation from "./AccountNavigation/Accountavigation";
import { management_email, management_number1 } from "utils/intel";



export default function Header() {
  const { t } = useTranslation();
 

  function SearchBar() {
    return (
      <input
        className="search_bar form_input_text_style"
        type="text"
        placeholder={t("search_for_more_than_ten_thousend_products")}
      />

    );
  }

  function Phone() {
    return (
      <div style={{ marginRight: "30px" }}>
        <span className="montserrat, title_text"> {t("phone")}</span>
        <span className="chilanka title_content_text"> {management_number1} </span>
      </div>
    );
  }
  function Email() {
    return (
      <div>
        <span className="montserrat, title_text"> {t("email")}</span>
        <span className="chilanka title_content_text">
          {management_email}
        </span>
      </div>
    );
  }

 


  return (
    <div>

      <div className=" header">
        <Logo />
        <SearchBar />
        <div className="phone"> <Phone /></div>
        <div className="email"> <Email /> </div>
      </div>


      <div className="underline" />



      <div className="header" >
        <SelectButton />
        <div className="spacing" />
        <Navigation />
        <div className="spacing" />
        <AccountNavigation />
      </div>


    </div>

    // <div style={{ display: "flex" }}>
    //   <div className="block">the one</div>
    //   <div className="block">the one</div>
    // </div>
  );
}
