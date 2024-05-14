import Currency from "./foundations/Currency";

export class CurrencyUSD extends Currency {
  async convertCurrency(currency: Currency): Promise<Currency> {
    /// 1 . take currency usd from
    //// 2. find novaday course currency
    /// 3. convert it which is need

    // const res = await fetch(this.checkout_currency);
    // const currency = await res.json();

    // return currency;
    throw new Error("Method not implemented.");
  }

  constructor(price: number) {
    super("UAH", "₴", price);
  }
}
