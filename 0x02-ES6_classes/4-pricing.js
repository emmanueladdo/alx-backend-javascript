/// class for Pricing
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.Currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amountVal) {
    this._amount = amountVal;
  }

  get currency() {
    return this._currency;
  }

  set currency(currencyVal) {
    this._currency = currencyVal;
  }
  displayFullPrice(){
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
