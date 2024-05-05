import { Review } from "models/Review";
import React, { useTransition } from "react";
import {format} from "date-fns";
import {enAU , uk } from "date-fns/locale"
import img from "assets/icons/user.svg";
import "./CustomerReview.scss";
import StarRate from "components/ProductComponent/starRate/starRate";
import { useTranslation } from "react-i18next";


const  CustomerReview : React.FC<{review: Review}>  = ({review }) => {

    const icon = review.user.avatar_img || img
    const {t} = useTranslation();

    return (
        <div className="review_container">
            <div className="review_img">
                {/* <Image/> */}
                <img src={icon} alt="avatar" />
            </div>
            <div>
                <div><StarRate/></div>
                
                <div> {review.user.name} {review.user.surname} {format(review.user.birthday , "dd/MM/yyyy" , {
                    "locale" : t("locale") == "ua" ?  uk : enAU 
                })}</div>
                
                {/* <Moment add={{ hours: 12 }}>{date}</Moment> */}
                <div> {review.comment}</div>
            </div>
        </div>
    )
}

export default CustomerReview;