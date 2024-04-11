export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // getter and setter for name
  viewName() {
    return this._name;
  }

  get name() {
    return this.viewName();
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // getter and setter for code
  viewCode() {
    return this._code;
  }

  get code() {
    return this.viewCode();
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // override toString method
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
