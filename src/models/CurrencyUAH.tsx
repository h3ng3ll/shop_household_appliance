import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { Currency } from "./foundations/Currency";

export class CurrencyUAH extends Currency {
  convertCurrency(currency: Currency): Promise<Currency> {
    throw new Error("Method not implemented.");
  }

  constructor(price: Double) {
    super("UAH", "₴", price);
  }
}
