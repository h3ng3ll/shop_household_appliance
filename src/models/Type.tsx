


export class Type {
    type_id : number 
    name : string  

    constructor (type_id : number , name : string) {
        this.type_id = type_id;
        this.name = name; 
    }

    static fromJson(json : Record<string , any> ){
        return new Type(
            json['type_id'],
            json['name']
        )
    }
}