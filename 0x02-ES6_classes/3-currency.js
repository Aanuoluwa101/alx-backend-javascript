export default class Currency {
    constructor(code, name) {
      this.code = code;
      this.name = name;
    }
  
    /**
     * Gets the code of the currency.
     */
    get code() {
      return this._code;
    }
  
     /**
     * Sets the code of the currency.
     */
    set code(value) {
      this._code = value;
    }
  
     /**
     * Gets the name of the currency.
     */
    get name() {
      return this._name;
    }
  
     /**
     * Sets the code of the currency.
     */
    set name(value) {
      this._name = value;
    }
  
    /**
     * Creates the full string representation of this Currency.
     * @returns {String}
     */
    displayFullCurrency() {
      return `${this.name} (${this.code})`;
    }
  }