import { Product } from "models/Product";
import "components/ProductComponent/ProductComponent.scss"
import StarRate from "./starRate/starRate";
import TransparentButton from "components/TransparentButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SingleProduct from "routes/SingleProduct/SingleProduct";
import { PRODUCT_ROUTE } from "utils/consts";
// import like from 

export default function ProductComponent(product: Product) {
  const t = useTranslation()
  const navigate = useNavigate()

  const onClick = () => {
   navigate(PRODUCT_ROUTE + "/" + product.product_id)
   console.log("navigate to" + PRODUCT_ROUTE + product.product_id)
  }
  
  return (

      <div>
        <img onClick={onClick} className="product_img" src={product.img} alt="" />
        <p> {product.name}</p>
        <p> <StarRate /> {product.raiting}</p>
        <h3 className="product_price" >  {product.getCurrencySign()} {product.price} </h3>
        <TransparentButton text="add_to_card" /> <br/>
        <TransparentButton useIcon icon="like" />
      </div>
  

  );
}
