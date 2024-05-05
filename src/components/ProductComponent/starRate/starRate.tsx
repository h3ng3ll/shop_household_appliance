
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRate.scss"
export default function StarRate() {

    const [rating, setState] = useState(null)
    return (
        <>

            {/* <div className="header_star">
                <a href="#" className="header_star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <div className="star_hover">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                </a>
            </div> */}

            <div style={{width: "2%" , overflow: "hidden" , display: "inline"}} >
                {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa fa-star" aria-hidden="true"></i>
                ))}
            </div>

            {/* {[...Array(5)].map(star => {
                return (

                    // <label>
                        
                         <FaStar className="half" offset={50}/>
                    // </label>
                   
                )
            })} */}
        </>
    )
}