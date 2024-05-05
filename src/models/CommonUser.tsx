import { User } from "./foundations/User";

import { COMMON_USER } from "utils/consts"

class CommonUser extends User {

    constructor(
        user_id: number,
        email: string,
        birthday: Date,
        basket_id: number,
        name : string , 
        surname :string,
        avatar_img? : string
    ) {
        super(user_id, email, COMMON_USER, birthday, basket_id , name , surname , avatar_img)
    }
}