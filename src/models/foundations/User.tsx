import { UserData } from "models/interfaces/UserData"



export abstract class User {

    public user_id: number
    public email: string
    public role: string
    public birthday? : Date
    public basket_id? : number
    public name? : string
    public surname? : string
    public avatar_img? : string


    constructor(
        userData : UserData,
        role : string 
    ) {
        this.role = role;
        this.email = userData.email;
        this.user_id = userData.user_id;
        this.basket_id = userData.basket_id;
        this.name = userData.name ; 
        this.surname = userData.surname;
        this.avatar_img = userData.avatar_img
    }

    
    

}