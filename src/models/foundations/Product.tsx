import { Currency } from "./Currency";

export abstract class Product {
  public currency: Currency;
  public name: string;

  constructor(name: string, currency: Currency) {
    this.name = name;
    this.currency = currency;
  }
}
