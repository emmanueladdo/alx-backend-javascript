// Class for currency
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(CodeVal) {
    this._code = CodeVal;
  }

  get name() {
    return this._name;
  }

  set name(NameVal) {
    this._name = NameVal;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
