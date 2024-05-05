import { AdminUser } from "./AdminUser";
import { Review } from "./Review";

export class Product{
  
  public product_id: number; 
  
  /// uah default 
  private currency_sign = "₴"; 

  private  type_id : number;
  private brand_id : number; 
  private supplier_id : number;
  private user_id : number; 
  
  public in_stock : boolean;
  public model_name : string;
  public price : number ; 
  
  // public details : Map<String , undefined>

  public img: string;
  public name: string; 
  public isNew: boolean;
  public raiting: number;

  constructor(
    name: string,
    image: string,
    isNew: boolean,
    raiting: number,
    product_id : number,
    type_id : number,
    brand_id : number , 
    supplier_id : number , 
    user_id : number , 
    model_name : string, 
    price : number , 
    in_stock? : boolean,
  ) {
    this.name = name; 
    this.product_id = product_id;
    this.img = image;
    this.isNew = isNew;
    this.raiting = raiting;
    this.type_id = type_id;
    this.brand_id = brand_id;
    this.supplier_id = supplier_id;
    this.user_id = user_id;
    this.model_name = model_name;
    this.price = price; 
    this.in_stock = in_stock ?? false
  }

  public getCurrencySign () : string {
    return this.currency_sign;
  }

  

}
