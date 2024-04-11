export default class Building {
  // construction function
  constructor(sqft) {
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  // getter and setter for sqft
  viewSqft() {
    return this._sqft;
  }

  get sqft() {
    return this.viewSqft();
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}
