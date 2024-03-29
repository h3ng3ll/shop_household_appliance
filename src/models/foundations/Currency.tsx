import { Double } from "react-native/Libraries/Types/CodegenTypes";

export abstract class Currency {
  public currency: string;
  public sign: string;
  public price: Double;

  /// url of json currency list
  protected checkout_currency =
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

  /// convert  currency price to another currency price
  /// Example [ UAH 39.6 to USD 1$ ]
  abstract convertCurrency(currency: Currency): Promise<Currency>;

  constructor(currency: string, sign: string, price: Double) {
    this.currency = currency;
    this.sign = sign;
    this.price = price;
  }
}
