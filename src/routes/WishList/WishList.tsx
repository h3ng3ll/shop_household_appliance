import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";
import { useTranslation } from "react-i18next";
import "./WishList.scss"
import ProductWishListItem from "./ProductWishListItem";
import { Context } from "index";
import { useContext, useEffect } from "react";
import { Product } from "models/Product"
import Tail from "components/Tail/Tail";
import { fetchProducts, getAllProductsFromBasket } from "http/productApi";
import { observer } from "mobx-react-lite";
import { BasketProduct } from "models/BasketProduct";

const WishList = observer(() => {

    const { t } = useTranslation()
    const { user } = useContext(Context)


    useEffect(() => {
        getAllProductsFromBasket(user.user?.user_id!).then((products) => {
            const productsList: Product[] = [];

            (products as Array<Record<string, any>>).map((product) => {
                const objType = Product.fromJson(product);
                productsList.push(objType);
            });

            user.setWishList(productsList);

        })
    }, [])


    function WishListHeader() {
        return (
            <>
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
            </>
        )
    }


    /// if user not authed redirect to register form 
    return <>
        <Header />
        <RouterHeader nameRouter={t("wishlist")} />

        <div style={{ margin: "0 auto", maxWidth: "1100px", padding: "5% 5%" }}>
            <WishListHeader/>
                {
                    user.wishList.length != 0 ? user.wishList.map((wishItem) => {
                        return <ProductWishListItem product={wishItem} />
                    }) : <h3 style={{ textAlign: "center" }}> {t("add_your_first_product")}</h3>
                }
            

        </div>

        <Tail />
    </>
})

export default WishList;

