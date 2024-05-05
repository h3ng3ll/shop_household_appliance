import { Product } from "models/Product";
import { useTranslation } from "react-i18next";




const CartDialogItem: React.FC<{ product?: Product, totalPrice?: number }> = ({ product, totalPrice }) => {


    const { t } = useTranslation();
    const style = "cart_dialog_item_name" + (totalPrice != null ? " total_price" : null)
    const total = (t("total") + "(UAH)");

    function buildItem() {
        return (
            <div className="cart_dialog_item">
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <h5 className="cart_dialog_item_name"> {product!.name} </h5>
                    <h5 className="cart_dialog_item_name"> {product!.price} ₴</h5>
                </div>
                <h6 className="cart_dialog_item_modelname">
                    {product!.model_name}
                </h6>
            </div>
        )
    }
    function buildTotalPrice() {
        return (
            <div className="cart_dialog_item">
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <h5 className="cart_dialog_item_name total_price"> {totalPrice != null ? total : product!.name} </h5>
                    <h5 className="cart_dialog_item_name total_price"> {totalPrice ?? product!.price} ₴</h5>
                </div>

            </div>
        )
    }

    if (product == null && totalPrice != null) {
        return buildTotalPrice()
    } {
        return buildItem()
    }


    // <div className="cart_dialog_item">
    //     <div style={{
    //         display: "flex" ,
    //          justifyContent: "space-between",
    //          }}>
    //         <h5 className={style}> {totalPrice != null ? total :  product!.name} </h5>
    //         <h5 className={style}> {totalPrice ?? product!.price} ₴</h5>
    //     </div>
    //     {totalPrice != null ?  <h6 className="cart_dialog_item_modelname">
    //         {product!.model_name}
    //     </h6> : null}
    // </div>

}

export default CartDialogItem;