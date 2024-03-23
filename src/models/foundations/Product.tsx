export abstract class Product {
  public price: number;
  public name: String;

  constructor(name: String, price: number) {
    this.name = name;
    this.price = price;
  }
}
