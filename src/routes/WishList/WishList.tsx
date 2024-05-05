import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";
import { useTranslation } from "react-i18next";
import "./WishList.scss"
import ProductWishListItem from "./ProductWishListItem";
import { Context } from "index";
import { useContext } from "react";
import { Product } from "models/Product"
import Tail from "components/Tail/Tail";

export default function WishList() {

    const { t } = useTranslation()
    const wishList = useContext(Context).user.wishList
  
    // const wishList  = [
    //     new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 2.4 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000 , true),
    //     new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 1.6 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
    //     new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 2.0 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000 , true),
    //     new Product("Пральна машина" , "https://s.ek.ua/jpg_zoom1/2390206.jpg" , true , 5.0 , 1 , 1 , 8 , 4 , 1 , "WAN 28263 UA" , 17000),
    // ]

    /// if user not authed redirect to register form 
    return <>
        <Header />
        <RouterHeader nameRouter={t("wishlist")} />

        <div style={{ margin: "0 auto", maxWidth: "1100px", padding: "5% 5%" }}>
            <div className="grid_container">
                <div style={{ width: "50%" }}>
                    {t("product").toUpperCase()}
                </div>
                <div style={{ width: "15%" }}>
                    {t("unit_price").toUpperCase()}
                </div>
                <div style={{ width: "35%" }} >
                    {t("stock_status").toUpperCase()}
                </div>
            </div>
            <div className="underline" />

            {
               wishList.length != 0 ?  wishList.map((product) => {
                    return ProductWishListItem(product)
                }) : <h3 style={{textAlign: "center"}}> {t("add_your_first_product")}</h3>
            }

        </div>

        <Tail/>
    </>
}