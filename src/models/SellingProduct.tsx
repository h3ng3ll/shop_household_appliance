import { Product } from "models/foundations/Product";

export class SellingProduct extends Product {
  public image: String;
  public isNew: boolean;
  public raiting: number;

  constructor(
    name: String,
    price: number,
    image: String,
    isNew: boolean,
    raiting: number
  ) {
    super(name, price);
    this.image = image;
    this.isNew = isNew;
    this.raiting = raiting;
  }
}
