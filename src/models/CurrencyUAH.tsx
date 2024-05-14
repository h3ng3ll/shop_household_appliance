import Currency from "./foundations/Currency";


export default class CurrencyUAH extends Currency {
  async convertCurrency(currency: Currency): Promise<Currency> {
    throw new Error("Method not implemented.");
  }

  constructor(price: number) {
    super("UAH", "₴", price);
  }
}
