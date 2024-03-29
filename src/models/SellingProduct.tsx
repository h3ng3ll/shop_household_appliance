import { Product } from "models/foundations/Product";
import { Currency } from "./foundations/Currency";

export class SellingProduct extends Product {
  public image: string;
  public isNew: boolean;
  public raiting: number;

  constructor(
    name: string,
    currency: Currency,
    image: string,
    isNew: boolean,
    raiting: number
  ) {
    super(name, currency);
    this.image = image;
    this.isNew = isNew;
    this.raiting = raiting;
  }
}
