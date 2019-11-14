'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Sets up the correct currency type and keeps track of moeny.
 */
var CoinPouch =
/*#__PURE__*/
function () {
  /**
   * A reference to the options for this shop.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the money this shop has.
   * 
   * @private
   * 
   * @property {Money}
   */

  /**
   * @param {Options} options A reference to the options for this shop.
   */
  function CoinPouch(options) {
    _classCallCheck(this, CoinPouch);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_amount", {});

    this._options = options;

    this._setup();
  }
  /**
   * Sets up the gold amount object with the structure defined in the initialization options.
   * 
   * @private
   */


  _createClass(CoinPouch, [{
    key: "_setup",
    value: function _setup() {
      for (var i = 0; i < this._options.currency.length; ++i) {
        var name = this._options.currency[i];
        var amount = this._options.startingMoney[i] || 0;
        this._amount[name] = amount;
      }
    }
    /**
     * Returns the amount of gold the shop has.
     * 
     * @returns {number|Money} Returns the gold as a single number if there is only one type of currency or it returns the gold as an object.
     */

  }, {
    key: "amount",
    value: function amount() {
      if (Object.keys(this._amount).length === 1) return this._amount[Object.keys(this._amount)[0]];
      return this._amount;
    }
    /**
     * Adds gold to the total amount.
     * 
     * @param {number|Money} amount The amount of gold to add to the total.
     */

  }, {
    key: "add",
    value: function add(amount) {
      if (typeof amount === 'number') this._amount[Object.keys(this._amount)[0]] += amount;else {
        for (var currency in amount) {
          var gold = amount[currency];
          this._amount[currency] += gold;
        }
      }
    }
    /**
     * Subtracts gold from the total amount.
     * 
     * @param {Money} amount The amount of gold to subtract from the total.
     */

  }, {
    key: "subtract",
    value: function subtract(amount) {
      if (typeof amount === 'number') this._amount[Object.keys(this._amount)[0]] -= amount;else {
        for (var currency in amount) {
          var gold = amount[currency];
          this._amount[currency] -= gold;
        }
      }
    }
  }]);

  return CoinPouch;
}();

exports["default"] = CoinPouch;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2luLXBvdWNoL0NvaW5Qb3VjaC50cyJdLCJuYW1lcyI6WyJDb2luUG91Y2giLCJvcHRpb25zIiwiX29wdGlvbnMiLCJfc2V0dXAiLCJpIiwiY3VycmVuY3kiLCJsZW5ndGgiLCJuYW1lIiwiYW1vdW50Iiwic3RhcnRpbmdNb25leSIsIl9hbW91bnQiLCJPYmplY3QiLCJrZXlzIiwiZ29sZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUtBOzs7SUFHcUJBLFM7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7O0FBR0EscUJBQVlDLE9BQVosRUFBOEI7QUFBQTs7QUFBQTs7QUFBQSxxQ0FMTCxFQUtLOztBQUU1QixTQUFLQyxRQUFMLEdBQWdCRCxPQUFoQjs7QUFFQSxTQUFLRSxNQUFMO0FBRUQ7QUFFRDs7Ozs7Ozs7OzZCQUtpQjtBQUVmLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixRQUFMLENBQWNHLFFBQWQsQ0FBdUJDLE1BQTNDLEVBQW1ELEVBQUVGLENBQXJELEVBQXdEO0FBRXRELFlBQU1HLElBQVksR0FBRyxLQUFLTCxRQUFMLENBQWNHLFFBQWQsQ0FBdUJELENBQXZCLENBQXJCO0FBRUEsWUFBTUksTUFBYyxHQUFHLEtBQUtOLFFBQUwsQ0FBY08sYUFBZCxDQUE0QkwsQ0FBNUIsS0FBa0MsQ0FBekQ7QUFFQSxhQUFLTSxPQUFMLENBQWFILElBQWIsSUFBcUJDLE1BQXJCO0FBRUQ7QUFFRjtBQUVEOzs7Ozs7Ozs2QkFLMkI7QUFFekIsVUFBSUcsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0YsT0FBakIsRUFBMEJKLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDLE9BQU8sS0FBS0ksT0FBTCxDQUFhQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLRixPQUFqQixFQUEwQixDQUExQixDQUFiLENBQVA7QUFFNUMsYUFBTyxLQUFLQSxPQUFaO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBS0lGLE0sRUFBMEI7QUFFNUIsVUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDLEtBQUtFLE9BQUwsQ0FBYUMsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0YsT0FBakIsRUFBMEIsQ0FBMUIsQ0FBYixLQUE4Q0YsTUFBOUMsQ0FBaEMsS0FFSztBQUVILGFBQUssSUFBTUgsUUFBWCxJQUF1QkcsTUFBdkIsRUFBK0I7QUFFN0IsY0FBTUssSUFBWSxHQUFHTCxNQUFNLENBQUNILFFBQUQsQ0FBM0I7QUFFQSxlQUFLSyxPQUFMLENBQWFMLFFBQWIsS0FBMEJRLElBQTFCO0FBRUQ7QUFFRjtBQUVGO0FBRUQ7Ozs7Ozs7OzZCQUtTTCxNLEVBQTBCO0FBRWpDLFVBQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQyxLQUFLRSxPQUFMLENBQWFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLE9BQWpCLEVBQTBCLENBQTFCLENBQWIsS0FBOENGLE1BQTlDLENBQWhDLEtBRUs7QUFFSCxhQUFLLElBQU1ILFFBQVgsSUFBdUJHLE1BQXZCLEVBQStCO0FBRTdCLGNBQU1LLElBQVksR0FBR0wsTUFBTSxDQUFDSCxRQUFELENBQTNCO0FBRUEsZUFBS0ssT0FBTCxDQUFhTCxRQUFiLEtBQTBCUSxJQUExQjtBQUVEO0FBRUY7QUFFRjs7Ozs7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9PcHRpb25zXCJcclxuaW1wb3J0IE1vbmV5IGZyb20gJy4uL2ludGVyZmFjZXMvTW9uZXknO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdXAgdGhlIGNvcnJlY3QgY3VycmVuY3kgdHlwZSBhbmQga2VlcHMgdHJhY2sgb2YgbW9lbnkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luUG91Y2gge1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyBzaG9wLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtb25leSB0aGlzIHNob3AgaGFzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtNb25leX1cclxuICAgKi9cclxuICBwcml2YXRlIF9hbW91bnQ6IE1vbmV5ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9ucyBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyBzaG9wLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICB0aGlzLl9zZXR1cCgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGdvbGQgYW1vdW50IG9iamVjdCB3aXRoIHRoZSBzdHJ1Y3R1cmUgZGVmaW5lZCBpbiB0aGUgaW5pdGlhbGl6YXRpb24gb3B0aW9ucy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldHVwKCkge1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fb3B0aW9ucy5jdXJyZW5jeS5sZW5ndGg7ICsraSkge1xyXG5cclxuICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gdGhpcy5fb3B0aW9ucy5jdXJyZW5jeVtpXTtcclxuXHJcbiAgICAgIGNvbnN0IGFtb3VudDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5zdGFydGluZ01vbmV5W2ldIHx8IDA7XHJcblxyXG4gICAgICB0aGlzLl9hbW91bnRbbmFtZV0gPSBhbW91bnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGFtb3VudCBvZiBnb2xkIHRoZSBzaG9wIGhhcy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfE1vbmV5fSBSZXR1cm5zIHRoZSBnb2xkIGFzIGEgc2luZ2xlIG51bWJlciBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0eXBlIG9mIGN1cnJlbmN5IG9yIGl0IHJldHVybnMgdGhlIGdvbGQgYXMgYW4gb2JqZWN0LlxyXG4gICAqL1xyXG4gIGFtb3VudCgpOiAobnVtYmVyIHwgTW9uZXkpIHtcclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fYW1vdW50KS5sZW5ndGggPT09IDEpIHJldHVybiB0aGlzLl9hbW91bnRbT2JqZWN0LmtleXModGhpcy5fYW1vdW50KVswXV07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGdvbGQgdG8gdGhlIHRvdGFsIGFtb3VudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcnxNb25leX0gYW1vdW50IFRoZSBhbW91bnQgb2YgZ29sZCB0byBhZGQgdG8gdGhlIHRvdGFsLlxyXG4gICAqL1xyXG4gIGFkZChhbW91bnQ6IChudW1iZXIgfCBNb25leSkpIHtcclxuXHJcbiAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicpIHRoaXMuX2Ftb3VudFtPYmplY3Qua2V5cyh0aGlzLl9hbW91bnQpWzBdXSArPSBhbW91bnQ7XHJcblxyXG4gICAgZWxzZSB7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGN1cnJlbmN5IGluIGFtb3VudCkge1xyXG5cclxuICAgICAgICBjb25zdCBnb2xkOiBudW1iZXIgPSBhbW91bnRbY3VycmVuY3ldO1xyXG5cclxuICAgICAgICB0aGlzLl9hbW91bnRbY3VycmVuY3ldICs9IGdvbGQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnRyYWN0cyBnb2xkIGZyb20gdGhlIHRvdGFsIGFtb3VudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge01vbmV5fSBhbW91bnQgVGhlIGFtb3VudCBvZiBnb2xkIHRvIHN1YnRyYWN0IGZyb20gdGhlIHRvdGFsLlxyXG4gICAqL1xyXG4gIHN1YnRyYWN0KGFtb3VudDogKG51bWJlciB8IE1vbmV5KSkge1xyXG5cclxuICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJykgdGhpcy5fYW1vdW50W09iamVjdC5rZXlzKHRoaXMuX2Ftb3VudClbMF1dIC09IGFtb3VudDtcclxuXHJcbiAgICBlbHNlIHtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgY3VycmVuY3kgaW4gYW1vdW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdvbGQ6IG51bWJlciA9IGFtb3VudFtjdXJyZW5jeV07XHJcblxyXG4gICAgICAgIHRoaXMuX2Ftb3VudFtjdXJyZW5jeV0gLT0gZ29sZDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn07Il19