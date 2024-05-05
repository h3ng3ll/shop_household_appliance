
// User describe product
// which already been purched

import { User } from "./foundations/User"

// User can write review 
export class Review {
    review_id: number

    product_id : number 
    rating: number
    comment: string
    review_date: Date
    
    /// who wrote down this review
    user : User; 

    constructor(
        review_id: number, rating: number,
        comment: string,review_date: Date,
        product_id: number , user : User,
    ) {
        this.review_date = review_date;
        this.comment = comment ; 
        this.rating = rating ; 
        this.review_id = review_id;
        this.product_id = product_id ; 
        this.user = user
    }
}