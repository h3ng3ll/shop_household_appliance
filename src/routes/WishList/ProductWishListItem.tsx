import { Context } from "index"
import { Product } from "models/Product"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { FaTrashCan } from "react-icons/fa6";

export default function ProductWishListItem(product: Product) {


    const { t } = useTranslation();
    const {user} = useContext(Context);

    return (
        <>

        <div className="product_item_style">
            <img src={product.img} alt="" height="100px" />
            <h5> {product.name + " " + product.model_name}</h5>
            <h5>  ₴ {product.price}</h5>
            <h5> {product.in_stock ? t("in_stock") : t("out_of_stoke")}</h5>
            <div id="card_trash_container">
                <button onClick={() => user.addToCart(product)} id="addcard_btn" className="form_button"> {t("add_to_cart").toUpperCase()}</button>
                <button onClick={() => user.removeFromCart(product)}  id="trash_icon"> <FaTrashCan  /> </button>
            </div>
        </div>
        <div className="underline" />
        </>
    )
}