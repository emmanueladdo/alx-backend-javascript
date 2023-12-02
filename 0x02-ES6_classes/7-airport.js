// The Class for Airport
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw TypeError(' invalid type Input');
    }
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(namevalue) {
    this._name = namevalue;
  }

  get code() {
    return this._code;
  }

  set code(codevalue) {
    this._code = codevalue;
  }
}
Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};
