import { User } from "./foundations/User";

import { ADMIN } from "utils/consts"
import { UserData } from "./interfaces/UserData";



export class AdminUser extends User {

    constructor(userData : UserData) {
        super(userData , ADMIN,)
    }
   
    static fromJson (json : Record<string , any>) : AdminUser{
        return new  AdminUser({
            user_id: json['user_id'],
            email: json['email'],
            birthday : new Date(json['birthday']),
            basket_id: json['basket_id'],
            name : json['firstname'],
            surname : json['lastname'],
            avatar_img : json['avatar_img'],
        })
    };
}