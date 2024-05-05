import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";
import { Context } from "index";
import { Product } from "models/Product";
import { useContext, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import StarRate from "components/ProductComponent/starRate/starRate";
import TransparentButton from "components/TransparentButton";
import AdditionalInfo from "./AdditionInfo";
import Tail from "components/Tail/Tail";
import SuggestedRegForm from "components/SuggestedRegForm/SuggestedRegForm";

export default function SingleProduct() {

    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const product = useContext(Context).devices.products.find((value) => value.product_id == parseInt(id!))!


    return <>
        <Header />
        <RouterHeader nameRouter={t("product")} />


        <div className="product_grid max_size ">
            <div>
                <img className="img_main" src={product!.img} alt="" />
            </div>
            <div>
                <h3> {product?.name}</h3>
                <h4> {product?.model_name}</h4>
                <StarRate />
                <h3> {product?.price} {product?.getCurrencySign()} </h3>

                <div style={{ display: "flex" }}>
                    <TransparentButton text="add_to_card" /> <br />
                    <div style={{ width: "20px" }} />
                    <TransparentButton useIcon icon="like" />
                </div>
            </div>


        </div>
        <div style={{ margin: "75px auto" }} className="max_size">
            <AdditionalInfo product={product} />
        </div>
        <SuggestedRegForm/>
        <Tail/>

    </>
}