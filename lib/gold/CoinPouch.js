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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nb2xkL0NvaW5Qb3VjaC50cyJdLCJuYW1lcyI6WyJHb2xkIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiX3NldHVwIiwiaSIsImN1cnJlbmN5IiwibGVuZ3RoIiwibmFtZSIsImFtb3VudCIsInN0YXJ0aW5nTW9uZXkiLCJfYW1vdW50IiwiT2JqZWN0Iiwia2V5cyIsImdvbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0lBR3FCQSxJOzs7QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7OztBQUdBLGdCQUFZQyxPQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEscUNBTEEsRUFLQTs7QUFDNUIsU0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7O0FBRUEsU0FBS0UsTUFBTDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs2QkFLaUI7QUFDZixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsUUFBTCxDQUFjRyxRQUFkLENBQXVCQyxNQUEzQyxFQUFtRCxFQUFFRixDQUFyRCxFQUF3RDtBQUN0RCxZQUFNRyxJQUFZLEdBQUcsS0FBS0wsUUFBTCxDQUFjRyxRQUFkLENBQXVCRCxDQUF2QixDQUFyQjtBQUVBLFlBQU1JLE1BQWMsR0FBRyxLQUFLTixRQUFMLENBQWNPLGFBQWQsQ0FBNEJMLENBQTVCLEtBQWtDLENBQXpEO0FBRUEsYUFBS00sT0FBTCxDQUFhSCxJQUFiLElBQXFCQyxNQUFyQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7NkJBS2dDO0FBQzlCLFVBQUlHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLE9BQWpCLEVBQTBCSixNQUExQixLQUFxQyxDQUF6QyxFQUE0QyxPQUFPLEtBQUtJLE9BQUwsQ0FBYUMsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0YsT0FBakIsRUFBMEIsQ0FBMUIsQ0FBYixDQUFQO0FBRTVDLGFBQU8sS0FBS0EsT0FBWjtBQUNEO0FBRUQ7Ozs7Ozs7O3dCQUtJRixNLEVBQStCO0FBQ2pDLFVBQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQyxLQUFLRSxPQUFMLENBQWFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLE9BQWpCLEVBQTBCLENBQTFCLENBQWIsS0FBOENGLE1BQTlDLENBQWhDLEtBRUs7QUFDSCxhQUFLLElBQU1ILFFBQVgsSUFBdUJHLE1BQXZCLEVBQStCO0FBQzdCLGNBQU1LLElBQVksR0FBR0wsTUFBTSxDQUFDSCxRQUFELENBQTNCO0FBRUEsZUFBS0ssT0FBTCxDQUFhTCxRQUFiLEtBQTBCUSxJQUExQjtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7Ozs7Ozs2QkFLU0wsTSxFQUErQjtBQUN0QyxVQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0MsS0FBS0UsT0FBTCxDQUFhQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLRixPQUFqQixFQUEwQixDQUExQixDQUFiLEtBQThDRixNQUE5QyxDQUFoQyxLQUVLO0FBQ0gsYUFBSyxJQUFNSCxRQUFYLElBQXVCRyxNQUF2QixFQUErQjtBQUM3QixjQUFNSyxJQUFZLEdBQUdMLE1BQU0sQ0FBQ0gsUUFBRCxDQUEzQjtBQUVBLGVBQUtLLE9BQUwsQ0FBYUwsUUFBYixLQUEwQlEsSUFBMUI7QUFDRDtBQUNGO0FBQ0Y7Ozs7Ozs7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvT3B0aW9uc1wiXHJcblxyXG5pbXBvcnQgR29sZEFtb3VudCBmcm9tICcuLi9pbnRlcmZhY2VzL01vbmV5JztcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHVwIHRoZSBjb3JyZWN0IGdvbGQgdHlwZSBhbmQga2VlcHMgdHJhY2sgb2YgZ29sZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvbGQge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIHNob3AuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFtb3VudCBvZiBnb2xkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtHb2xkQW1vdW50fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Ftb3VudDogR29sZEFtb3VudCA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnMgQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoaXMgc2hvcC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICB0aGlzLl9zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZ29sZCBhbW91bnQgb2JqZWN0IHdpdGggdGhlIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBpbml0aWFsaXphdGlvbiBvcHRpb25zLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2V0dXAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX29wdGlvbnMuY3VycmVuY3kubGVuZ3RoOyArK2kpIHtcclxuICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gdGhpcy5fb3B0aW9ucy5jdXJyZW5jeVtpXTtcclxuXHJcbiAgICAgIGNvbnN0IGFtb3VudDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5zdGFydGluZ01vbmV5W2ldIHx8IDA7XHJcblxyXG4gICAgICB0aGlzLl9hbW91bnRbbmFtZV0gPSBhbW91bnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBhbW91bnQgb2YgZ29sZCB0aGUgc2hvcCBoYXMuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcnxHb2xkQW1vdW50fSBSZXR1cm5zIHRoZSBnb2xkIGFzIGEgc2luZ2xlIG51bWJlciBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0eXBlIG9mIGN1cnJlbmN5IG9yIGl0IHJldHVybnMgdGhlIGdvbGQgYXMgYW4gb2JqZWN0LlxyXG4gICAqL1xyXG4gIGFtb3VudCgpOiAobnVtYmVyIHwgR29sZEFtb3VudCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2Ftb3VudCkubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy5fYW1vdW50W09iamVjdC5rZXlzKHRoaXMuX2Ftb3VudClbMF1dO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9hbW91bnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGdvbGQgdG8gdGhlIHRvdGFsIGFtb3VudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcnxHb2xkQW1vdW50fSBhbW91bnQgVGhlIGFtb3VudCBvZiBnb2xkIHRvIGFkZCB0byB0aGUgdG90YWwuXHJcbiAgICovXHJcbiAgYWRkKGFtb3VudDogKG51bWJlciB8IEdvbGRBbW91bnQpKSB7XHJcbiAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicpIHRoaXMuX2Ftb3VudFtPYmplY3Qua2V5cyh0aGlzLl9hbW91bnQpWzBdXSArPSBhbW91bnQ7XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgY3VycmVuY3kgaW4gYW1vdW50KSB7XHJcbiAgICAgICAgY29uc3QgZ29sZDogbnVtYmVyID0gYW1vdW50W2N1cnJlbmN5XTtcclxuXHJcbiAgICAgICAgdGhpcy5fYW1vdW50W2N1cnJlbmN5XSArPSBnb2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJ0cmFjdHMgZ29sZCBmcm9tIHRoZSB0b3RhbCBhbW91bnQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtHb2xkQW1vdW50fSBhbW91bnQgVGhlIGFtb3VudCBvZiBnb2xkIHRvIHN1YnRyYWN0IGZyb20gdGhlIHRvdGFsLlxyXG4gICAqL1xyXG4gIHN1YnRyYWN0KGFtb3VudDogKG51bWJlciB8IEdvbGRBbW91bnQpKSB7XHJcbiAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicpIHRoaXMuX2Ftb3VudFtPYmplY3Qua2V5cyh0aGlzLl9hbW91bnQpWzBdXSAtPSBhbW91bnQ7XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgY3VycmVuY3kgaW4gYW1vdW50KSB7XHJcbiAgICAgICAgY29uc3QgZ29sZDogbnVtYmVyID0gYW1vdW50W2N1cnJlbmN5XTtcclxuXHJcbiAgICAgICAgdGhpcy5fYW1vdW50W2N1cnJlbmN5XSAtPSBnb2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59OyJdfQ==