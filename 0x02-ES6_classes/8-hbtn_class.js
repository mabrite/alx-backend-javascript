export default class Airport {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('location must be a string');
    }
  }

  // getter and setter for size
  viewSize() {
    return this._size;
  }

  get size() {
    return this.viewSize();
  }

  set size(value) {
    if (typeof value === 'string') {
      this._size = value;
    } else {
      throw new TypeError('size must be a number');
    }
  }

  // getter and setter for location
  viewLocation() {
    return this._location;
  }

  get location() {
    return this.viewLocation();
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new TypeError('location must be a string');
    }
  }

  // override toString method
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this.size;
    }
    return this;
  }
}
