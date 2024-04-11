import Currency from './3-currency';

export default class Pricing {
  // construction function
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be a currency object');
    }
  }

  // getter and setter for amount
  viewAmount() {
    return this._amount;
  }

  get amount() {
    return this.viewAmount();
  }

  set amount(value) {
    if (typeof value === 'string') {
      this._amount = value;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  // getter and setter for currency
  viewCurrency() {
    return this._currency;
  }

  get currency() {
    return this.viewCurrency();
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('currency must be a currency object');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
