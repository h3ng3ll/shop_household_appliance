import { AdminUser } from "./AdminUser";
import { Review } from "./Review";
import { ProductPrototype } from "./interfaces/ProductPrototype";

export class Product {

  public product_id: number;

  /// uah default 
  private currency_sign = "₴";

  public type_id: number;
  public brand_id: number;
  public supplier_id: number;
  public user_id: number;

  public in_stock: boolean;
  public model_name: string;
  public price: number;
  public details? : Record<string , any>
  // public details : Map<String , undefined>

  public img: string;
  // public name: string; 
  public name: string;
  
  public raiting: number;
  public discount: number; 
  public release_date: number; 

  constructor(product: {
    name: string,
    image: string,
    isNew?: boolean,
    raiting: number,
    discount: number,
    product_id: number,
    release_date: number, 
    type_id: number,
    brand_id: number,
    supplier_id: number,
    user_id: number,
    model_name: string,
    price: number,
    in_stock?: boolean,
    // details? : Record<string , any>, 
  }) {
    this.name = product.name;
    this.product_id = product.product_id;
    this.img =  process.env.REACT_APP_API_URL +  product.image;
 
    this.raiting = product.raiting;
    this.type_id = product.type_id;
    this.brand_id = product.brand_id;
    this.supplier_id = product.supplier_id;
    this.user_id = product.user_id;
    this.model_name = product.model_name;
    this.price = product.price;
    this.discount  = product.discount;
    this.release_date = product.release_date;
    this.in_stock = product.in_stock ?? false;
    // this.details = product.details;
  }

  public getCurrencySign(): string {
    return this.currency_sign;
  }

  static fromJson(json: Record<string, any>) {
    return new Product({
      product_id: json['product_id'],
      name: json['name'],
      model_name: json['model_name'],
      raiting: json['rating'],
      price: json['price'],
      image: json['img'],
      discount: json['discount'],
      release_date : json['release_date'],
      // details : json['r']
      type_id: json['typeTypeId'],
      brand_id : json['brandBrandId'],
      supplier_id : json['supplierSupplierId'],
      user_id : json['userUserId'],
    })
  }

   get isNew () { return true};
}
