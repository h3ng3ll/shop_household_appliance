

export class Order {
    order_id: number

    /// in DB declared as ENUM 
    status: string
    
    date: Date
    comments: string

    /// costs all products
    price: number

    /// list id of ordered products
    products: number[]

    constructor(
        order_id: number,
        status: string,
        date: Date,
        comments: string,
        price: number,
        products: number[],
    ){
        this.order_id = order_id,
        this.status = status,
        this.date = date,
        this.comments = comments , 
        this.price = price , 
        this.products = products
    }

}