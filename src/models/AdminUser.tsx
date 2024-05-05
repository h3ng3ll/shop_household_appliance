import { User } from "./foundations/User";

import { ADMIN } from "utils/consts"

export class AdminUser extends User {

    constructor(
        user_id: number,
        email: string,
        birthday: Date,
        basket_id: number,
        name : string , 
        surname : string , 
        avatar_img? : string, 
    ) {
        super(user_id, email, ADMIN, birthday, basket_id , name , surname , avatar_img)
    }
}