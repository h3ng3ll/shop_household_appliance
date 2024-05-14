import { User } from "./foundations/User";

import { COMMON_USER } from "utils/consts"
import { UserData } from "./interfaces/UserData";

export class CommonUser extends User {

    constructor(
        userData : UserData
    ) {
        super(userData,  COMMON_USER)
    }

    static fromJson (json : Record<string , any>) : CommonUser {
        return new CommonUser({
            user_id: json['user_id'],
            email: json['email'],
            birthday : new Date(json['birthday']),
            basket_id: json['basket_id'],
            name : json['firstname'],
            surname : json['lastname'],
            avatar_img : json['avatar_img'],
        })
    }
}