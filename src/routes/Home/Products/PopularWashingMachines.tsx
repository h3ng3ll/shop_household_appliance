import ProductComponent from "components/ProductComponent/ProductComponent"
import { Context } from "index"
import { useContext } from "react"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularWashingMachines.scss"
export default function PopularWashingMachines () {

    const products = useContext(Context).devices.popularWashingMachines
    let settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return<div>
        
    {/* Do not wrap Slider any div */}
        <Slider  {...settings}>
        {
            products.map((product , index ) => <ProductComponent product={product}/>)
        }
        </Slider>
    </div>
}