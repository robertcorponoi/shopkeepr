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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2luLXBvdWNoL0NvaW5Qb3VjaC50cyJdLCJuYW1lcyI6WyJDb2luUG91Y2giLCJvcHRpb25zIiwiX29wdGlvbnMiLCJfc2V0dXAiLCJpIiwiY3VycmVuY3kiLCJsZW5ndGgiLCJuYW1lIiwiYW1vdW50Iiwic3RhcnRpbmdNb25leSIsIl9hbW91bnQiLCJPYmplY3QiLCJrZXlzIiwiZ29sZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUtBOzs7SUFHcUJBLFM7OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7O0FBR0EscUJBQVlDLE9BQVosRUFBOEI7QUFBQTs7QUFBQTs7QUFBQSxxQ0FMTCxFQUtLOztBQUM1QixTQUFLQyxRQUFMLEdBQWdCRCxPQUFoQjs7QUFFQSxTQUFLRSxNQUFMO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzZCQUtpQjtBQUNmLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixRQUFMLENBQWNHLFFBQWQsQ0FBdUJDLE1BQTNDLEVBQW1ELEVBQUVGLENBQXJELEVBQXdEO0FBQ3RELFlBQU1HLElBQVksR0FBRyxLQUFLTCxRQUFMLENBQWNHLFFBQWQsQ0FBdUJELENBQXZCLENBQXJCO0FBRUEsWUFBTUksTUFBYyxHQUFHLEtBQUtOLFFBQUwsQ0FBY08sYUFBZCxDQUE0QkwsQ0FBNUIsS0FBa0MsQ0FBekQ7QUFFQSxhQUFLTSxPQUFMLENBQWFILElBQWIsSUFBcUJDLE1BQXJCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs2QkFLMkI7QUFDekIsVUFBSUcsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0YsT0FBakIsRUFBMEJKLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDLE9BQU8sS0FBS0ksT0FBTCxDQUFhQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLRixPQUFqQixFQUEwQixDQUExQixDQUFiLENBQVA7QUFFNUMsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7d0JBS0lGLE0sRUFBMEI7QUFDNUIsVUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDLEtBQUtFLE9BQUwsQ0FBYUMsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0YsT0FBakIsRUFBMEIsQ0FBMUIsQ0FBYixLQUE4Q0YsTUFBOUMsQ0FBaEMsS0FFSztBQUNILGFBQUssSUFBTUgsUUFBWCxJQUF1QkcsTUFBdkIsRUFBK0I7QUFDN0IsY0FBTUssSUFBWSxHQUFHTCxNQUFNLENBQUNILFFBQUQsQ0FBM0I7QUFFQSxlQUFLSyxPQUFMLENBQWFMLFFBQWIsS0FBMEJRLElBQTFCO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7Ozs7Ozs7OzZCQUtTTCxNLEVBQTBCO0FBQ2pDLFVBQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQyxLQUFLRSxPQUFMLENBQWFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLE9BQWpCLEVBQTBCLENBQTFCLENBQWIsS0FBOENGLE1BQTlDLENBQWhDLEtBRUs7QUFDSCxhQUFLLElBQU1ILFFBQVgsSUFBdUJHLE1BQXZCLEVBQStCO0FBQzdCLGNBQU1LLElBQVksR0FBR0wsTUFBTSxDQUFDSCxRQUFELENBQTNCO0FBRUEsZUFBS0ssT0FBTCxDQUFhTCxRQUFiLEtBQTBCUSxJQUExQjtBQUNEO0FBQ0Y7QUFDRjs7Ozs7OztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9PcHRpb25zXCJcclxuaW1wb3J0IE1vbmV5IGZyb20gJy4uL2ludGVyZmFjZXMvTW9uZXknO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdXAgdGhlIGNvcnJlY3QgY3VycmVuY3kgdHlwZSBhbmQga2VlcHMgdHJhY2sgb2YgbW9lbnkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luUG91Y2gge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIHNob3AuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1vbmV5IHRoaXMgc2hvcCBoYXMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge01vbmV5fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Ftb3VudDogTW9uZXkgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIHNob3AuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgdGhpcy5fc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGdvbGQgYW1vdW50IG9iamVjdCB3aXRoIHRoZSBzdHJ1Y3R1cmUgZGVmaW5lZCBpbiB0aGUgaW5pdGlhbGl6YXRpb24gb3B0aW9ucy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldHVwKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vcHRpb25zLmN1cnJlbmN5Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IHRoaXMuX29wdGlvbnMuY3VycmVuY3lbaV07XHJcblxyXG4gICAgICBjb25zdCBhbW91bnQ6IG51bWJlciA9IHRoaXMuX29wdGlvbnMuc3RhcnRpbmdNb25leVtpXSB8fCAwO1xyXG5cclxuICAgICAgdGhpcy5fYW1vdW50W25hbWVdID0gYW1vdW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgYW1vdW50IG9mIGdvbGQgdGhlIHNob3AgaGFzLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8TW9uZXl9IFJldHVybnMgdGhlIGdvbGQgYXMgYSBzaW5nbGUgbnVtYmVyIGlmIHRoZXJlIGlzIG9ubHkgb25lIHR5cGUgb2YgY3VycmVuY3kgb3IgaXQgcmV0dXJucyB0aGUgZ29sZCBhcyBhbiBvYmplY3QuXHJcbiAgICovXHJcbiAgYW1vdW50KCk6IChudW1iZXIgfCBNb25leSkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2Ftb3VudCkubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy5fYW1vdW50W09iamVjdC5rZXlzKHRoaXMuX2Ftb3VudClbMF1dO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9hbW91bnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGdvbGQgdG8gdGhlIHRvdGFsIGFtb3VudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcnxNb25leX0gYW1vdW50IFRoZSBhbW91bnQgb2YgZ29sZCB0byBhZGQgdG8gdGhlIHRvdGFsLlxyXG4gICAqL1xyXG4gIGFkZChhbW91bnQ6IChudW1iZXIgfCBNb25leSkpIHtcclxuICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJykgdGhpcy5fYW1vdW50W09iamVjdC5rZXlzKHRoaXMuX2Ftb3VudClbMF1dICs9IGFtb3VudDtcclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgZm9yIChjb25zdCBjdXJyZW5jeSBpbiBhbW91bnQpIHtcclxuICAgICAgICBjb25zdCBnb2xkOiBudW1iZXIgPSBhbW91bnRbY3VycmVuY3ldO1xyXG5cclxuICAgICAgICB0aGlzLl9hbW91bnRbY3VycmVuY3ldICs9IGdvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnRyYWN0cyBnb2xkIGZyb20gdGhlIHRvdGFsIGFtb3VudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge01vbmV5fSBhbW91bnQgVGhlIGFtb3VudCBvZiBnb2xkIHRvIHN1YnRyYWN0IGZyb20gdGhlIHRvdGFsLlxyXG4gICAqL1xyXG4gIHN1YnRyYWN0KGFtb3VudDogKG51bWJlciB8IE1vbmV5KSkge1xyXG4gICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICdudW1iZXInKSB0aGlzLl9hbW91bnRbT2JqZWN0LmtleXModGhpcy5fYW1vdW50KVswXV0gLT0gYW1vdW50O1xyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBmb3IgKGNvbnN0IGN1cnJlbmN5IGluIGFtb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGdvbGQ6IG51bWJlciA9IGFtb3VudFtjdXJyZW5jeV07XHJcblxyXG4gICAgICAgIHRoaXMuX2Ftb3VudFtjdXJyZW5jeV0gLT0gZ29sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTsiXX0=