

import { MouseEvent, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./CartDialog.scss"
import cart from "assets/icons/cart.svg";
import { Context } from "index";
import CartDialogItem from "./CartDaialogItem";
import UserStore from "store/UserStore";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_ROUTE } from "utils/consts";
import { getAllProductsFromCart } from "http/productApi";
import { Product } from "models/Product";
export default function CartDialog() {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [isOpen, openDialog] = useState(false);

    const user : UserStore   = useContext(Context).user;
    const basket  = user.cart

    let totalPrice = 0.0;
    basket.map((cart) => { totalPrice += cart.price;})

    useEffect(( ) => {
        if(user.user){
            if(user.user?.basket_id){
                getAllProductsFromCart(user.user?.basket_id).then((products) => {
                    const productsList: Product[] = [];
        
                    (products as Array<Record<string, any>>).map((product) => {
                        const objType = Product.fromJson(product);
                        productsList.push(objType);
                    });
        
                    user.setCart(productsList);
        
                })
            }
           
        }
        
    })

    function handleModalClick(event: MouseEvent) {
        // Останавливаем всплытие события, чтобы оно не дошло до родительского контейнера
        event.stopPropagation();
    }

    function onCheckoutClick(evnet: MouseEvent) {

    }


    function ModalDialog() {
        return (
            <div onClick={() => openDialog(false)} className="modal_container">
                <div onClick={handleModalClick}>
                    <div className="cart_container">

                        <div className="cart_container_title">
                            <h4 className="cart__title_text">
                                {t("your_cart")}
                            </h4>
                            <h5 className="cart__title_counter">
                                {basket.length}
                            </h5>
                        </div>

                        {
                            basket.map((cart) => {
                                return <CartDialogItem product={cart} />
                            })

                        }
                        <CartDialogItem totalPrice={totalPrice} />

                        <div className="checkout_button form_button" onClick={onCheckoutClick}>
                            {t("continue_to_checkout")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function showDialog () {
        if(user.isAuth){
            openDialog(true)
        } else {
            navigate(ACCOUNT_ROUTE)
        }
        
    }
    return (

        /// in full  size
        <  >
            <img onClick={() => showDialog()} className="icon_btn" src={cart} alt="cart" />

            {/* /// minimized */}
            {isOpen ? <ModalDialog /> : null}

        </>




    )
}