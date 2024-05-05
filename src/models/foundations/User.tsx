
export abstract class User {

    public user_id: number
    public email: string
    public role: string
    public birthday: Date
    public basket_id : number
    public name : string
    public surname : string
    public avatar_img? : string

    constructor(
        user_id: number,
        email: string,
        role: string,
        birthday: Date,
        basket_id : number,
        name : string , 
        surname : string,
        avatar_img? : string, 
    ) {
        this.birthday = birthday;
        this.role = role;
        this.email = email;
        this.user_id = user_id;
        this.basket_id = basket_id;
        this.name = name ; 
        this.surname = surname;
        this.avatar_img = avatar_img
    }

}