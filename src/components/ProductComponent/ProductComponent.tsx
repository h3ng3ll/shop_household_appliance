import { Product } from "models/Product";
import "components/ProductComponent/ProductComponent.scss"
import StarRate from "./starRate/starRate";
import TransparentButton from "components/TransparentButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SingleProduct from "routes/SingleProduct/SingleProduct";
import { ACCOUNT_ROUTE, ADMIN_ROUTE, PRODUCT_ROUTE } from "utils/consts";
import { useContext, useState } from "react";
import { Context } from "index";
import { addProductToBasket } from "http/productApi";
import { observer } from "mobx-react-lite";
// import like from 

const ProductComponent = observer((product:{ product:  Product}) => {

  const t = useTranslation()
  const navigate = useNavigate()
  const { user } = useContext(Context)

  // const [isHaveInCart , setIsHaveInCart] = useState(user.cart.map((cartItem) => cartItem.product_id).includes(product.product.product_id));
  // const [isHaveInBasket , setIsHaveInBasket] = useState(user.wishList.map((wishItem) => wishItem.product_id).includes(product.product.product_id));
  
  const isHaveInCart =  user.cart.map((cartItem) => cartItem.product_id).includes(product.product.product_id); 
  const isHaveInBasket =  user.wishList.map((whishItem) => whishItem.product_id).includes(product.product.product_id); 

  const onClick = () => {
   navigate(PRODUCT_ROUTE + "/" + product.product.product_id)
  }
  
  const addToWishList =  async () => {
    if(!user.user)  return navigate(ACCOUNT_ROUTE)
    if(isHaveInBasket){
      await user.removeFromBasket(product.product.product_id)
      // setIsHaveInBasket(false)
      alert("Delete successfully")
    } else {
      await user.addToBasket(product.product.product_id)
      // setIsHaveInBasket(true)
      alert("Added successfully")
    }
    
    
  }

  const addToCart = async () =>  {
    if(!user.user)  return navigate(ACCOUNT_ROUTE)
    if(isHaveInCart){
      await user.removeFromCart(product.product.product_id)
      // setIsHaveInCart(true)
      alert("Delete successfully")
    }else {
      await user.addToCart(product.product.product_id)
      // setIsHaveInCart(false)
      alert("Added successfully")
    }
    
  }

  const styleCart =  isHaveInCart ?  "transparent_button_fill" : ""
  const styleBasket =  isHaveInBasket ?  "transparent_button_fill" : ""
  
  return (

      <div>
        <img onClick={onClick} className="product_img" src={product.product.img} alt="" />
        <p> {product.product.name}</p>
        <p> <StarRate /> {product.product.raiting}</p>
        <h3 className="product_price" >  {product.product.getCurrencySign()} {product.product.price} </h3>
        <TransparentButton classNames={styleCart} onClick={addToCart}  text="add_to_card" /> <br/>
        <TransparentButton classNames={styleBasket}  onClick={addToWishList} useIcon icon="like" />
      </div>
  

  );
})

export default ProductComponent
