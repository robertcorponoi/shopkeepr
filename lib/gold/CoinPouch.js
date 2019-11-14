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
 * Sets up the correct gold type and keeps track of gold.
 */
var Gold =
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
   * A reference to the amount of gold.
   * 
   * @private
   * 
   * @property {GoldAmount}
   */

  /**
   * @param {Options} options A reference to the options for this shop.
   */
  function Gold(options) {
    _classCallCheck(this, Gold);

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


  _createClass(Gold, [{
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
     * @returns {number|GoldAmount} Returns the gold as a single number if there is only one type of currency or it returns the gold as an object.
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
     * @param {number|GoldAmount} amount The amount of gold to add to the total.
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
     * @param {GoldAmount} amount The amount of gold to subtract from the total.
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

  return Gold;
}();

exports["default"] = Gold;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nb2xkL0NvaW5Qb3VjaC50cyJdLCJuYW1lcyI6WyJHb2xkIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiX3NldHVwIiwiaSIsImN1cnJlbmN5IiwibGVuZ3RoIiwibmFtZSIsImFtb3VudCIsInN0YXJ0aW5nTW9uZXkiLCJfYW1vdW50IiwiT2JqZWN0Iiwia2V5cyIsImdvbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0lBR3FCQSxJOzs7QUFFbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7OztBQUdBLGdCQUFZQyxPQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEscUNBTEEsRUFLQTs7QUFFNUIsU0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7O0FBRUEsU0FBS0UsTUFBTDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs2QkFLaUI7QUFFZixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsUUFBTCxDQUFjRyxRQUFkLENBQXVCQyxNQUEzQyxFQUFtRCxFQUFFRixDQUFyRCxFQUF3RDtBQUV0RCxZQUFNRyxJQUFZLEdBQUcsS0FBS0wsUUFBTCxDQUFjRyxRQUFkLENBQXVCRCxDQUF2QixDQUFyQjtBQUVBLFlBQU1JLE1BQWMsR0FBRyxLQUFLTixRQUFMLENBQWNPLGFBQWQsQ0FBNEJMLENBQTVCLEtBQWtDLENBQXpEO0FBRUEsYUFBS00sT0FBTCxDQUFhSCxJQUFiLElBQXFCQyxNQUFyQjtBQUVEO0FBRUY7QUFFRDs7Ozs7Ozs7NkJBS2dDO0FBRTlCLFVBQUlHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLE9BQWpCLEVBQTBCSixNQUExQixLQUFxQyxDQUF6QyxFQUE0QyxPQUFPLEtBQUtJLE9BQUwsQ0FBYUMsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0YsT0FBakIsRUFBMEIsQ0FBMUIsQ0FBYixDQUFQO0FBRTVDLGFBQU8sS0FBS0EsT0FBWjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQUtJRixNLEVBQStCO0FBRWpDLFVBQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQyxLQUFLRSxPQUFMLENBQWFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLE9BQWpCLEVBQTBCLENBQTFCLENBQWIsS0FBOENGLE1BQTlDLENBQWhDLEtBRUs7QUFFSCxhQUFLLElBQU1ILFFBQVgsSUFBdUJHLE1BQXZCLEVBQStCO0FBRTdCLGNBQU1LLElBQVksR0FBR0wsTUFBTSxDQUFDSCxRQUFELENBQTNCO0FBRUEsZUFBS0ssT0FBTCxDQUFhTCxRQUFiLEtBQTBCUSxJQUExQjtBQUVEO0FBRUY7QUFFRjtBQUVEOzs7Ozs7Ozs2QkFLU0wsTSxFQUErQjtBQUV0QyxVQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0MsS0FBS0UsT0FBTCxDQUFhQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLRixPQUFqQixFQUEwQixDQUExQixDQUFiLEtBQThDRixNQUE5QyxDQUFoQyxLQUVLO0FBRUgsYUFBSyxJQUFNSCxRQUFYLElBQXVCRyxNQUF2QixFQUErQjtBQUU3QixjQUFNSyxJQUFZLEdBQUdMLE1BQU0sQ0FBQ0gsUUFBRCxDQUEzQjtBQUVBLGVBQUtLLE9BQUwsQ0FBYUwsUUFBYixLQUEwQlEsSUFBMUI7QUFFRDtBQUVGO0FBRUY7Ozs7Ozs7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvT3B0aW9uc1wiXHJcblxyXG5pbXBvcnQgR29sZEFtb3VudCBmcm9tICcuLi9pbnRlcmZhY2VzL01vbmV5JztcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHVwIHRoZSBjb3JyZWN0IGdvbGQgdHlwZSBhbmQga2VlcHMgdHJhY2sgb2YgZ29sZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvbGQge1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyBzaG9wLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhbW91bnQgb2YgZ29sZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7R29sZEFtb3VudH1cclxuICAgKi9cclxuICBwcml2YXRlIF9hbW91bnQ6IEdvbGRBbW91bnQgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIHNob3AuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIHRoaXMuX3NldHVwKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZ29sZCBhbW91bnQgb2JqZWN0IHdpdGggdGhlIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBpbml0aWFsaXphdGlvbiBvcHRpb25zLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2V0dXAoKSB7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vcHRpb25zLmN1cnJlbmN5Lmxlbmd0aDsgKytpKSB7XHJcblxyXG4gICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSB0aGlzLl9vcHRpb25zLmN1cnJlbmN5W2ldO1xyXG5cclxuICAgICAgY29uc3QgYW1vdW50OiBudW1iZXIgPSB0aGlzLl9vcHRpb25zLnN0YXJ0aW5nTW9uZXlbaV0gfHwgMDtcclxuXHJcbiAgICAgIHRoaXMuX2Ftb3VudFtuYW1lXSA9IGFtb3VudDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgYW1vdW50IG9mIGdvbGQgdGhlIHNob3AgaGFzLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8R29sZEFtb3VudH0gUmV0dXJucyB0aGUgZ29sZCBhcyBhIHNpbmdsZSBudW1iZXIgaWYgdGhlcmUgaXMgb25seSBvbmUgdHlwZSBvZiBjdXJyZW5jeSBvciBpdCByZXR1cm5zIHRoZSBnb2xkIGFzIGFuIG9iamVjdC5cclxuICAgKi9cclxuICBhbW91bnQoKTogKG51bWJlciB8IEdvbGRBbW91bnQpIHtcclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fYW1vdW50KS5sZW5ndGggPT09IDEpIHJldHVybiB0aGlzLl9hbW91bnRbT2JqZWN0LmtleXModGhpcy5fYW1vdW50KVswXV07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGdvbGQgdG8gdGhlIHRvdGFsIGFtb3VudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcnxHb2xkQW1vdW50fSBhbW91bnQgVGhlIGFtb3VudCBvZiBnb2xkIHRvIGFkZCB0byB0aGUgdG90YWwuXHJcbiAgICovXHJcbiAgYWRkKGFtb3VudDogKG51bWJlciB8IEdvbGRBbW91bnQpKSB7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICdudW1iZXInKSB0aGlzLl9hbW91bnRbT2JqZWN0LmtleXModGhpcy5fYW1vdW50KVswXV0gKz0gYW1vdW50O1xyXG5cclxuICAgIGVsc2Uge1xyXG5cclxuICAgICAgZm9yIChjb25zdCBjdXJyZW5jeSBpbiBhbW91bnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ29sZDogbnVtYmVyID0gYW1vdW50W2N1cnJlbmN5XTtcclxuXHJcbiAgICAgICAgdGhpcy5fYW1vdW50W2N1cnJlbmN5XSArPSBnb2xkO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJ0cmFjdHMgZ29sZCBmcm9tIHRoZSB0b3RhbCBhbW91bnQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtHb2xkQW1vdW50fSBhbW91bnQgVGhlIGFtb3VudCBvZiBnb2xkIHRvIHN1YnRyYWN0IGZyb20gdGhlIHRvdGFsLlxyXG4gICAqL1xyXG4gIHN1YnRyYWN0KGFtb3VudDogKG51bWJlciB8IEdvbGRBbW91bnQpKSB7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICdudW1iZXInKSB0aGlzLl9hbW91bnRbT2JqZWN0LmtleXModGhpcy5fYW1vdW50KVswXV0gLT0gYW1vdW50O1xyXG5cclxuICAgIGVsc2Uge1xyXG5cclxuICAgICAgZm9yIChjb25zdCBjdXJyZW5jeSBpbiBhbW91bnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ29sZDogbnVtYmVyID0gYW1vdW50W2N1cnJlbmN5XTtcclxuXHJcbiAgICAgICAgdGhpcy5fYW1vdW50W2N1cnJlbmN5XSAtPSBnb2xkO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufTsiXX0=