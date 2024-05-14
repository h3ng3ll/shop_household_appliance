


export class Category {

    public  id : number 
    public  name? : string 
    public image?  : string
    constructor(category_id : number , description : string , icon? :string ){
        this.id =  category_id
        this.name = description
        this.image = icon
    }

    static fromJson(json : Record<string , any>){
        return new Category(
            json['category_id'],
            json['name'],
            json['img'] /// not exists yet
        )
    }
}