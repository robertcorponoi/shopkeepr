'use strict';

var _Options = _interopRequireDefault(require("./options/Options"));

var _Inventory = _interopRequireDefault(require("./inventory/Inventory"));

var _CoinPouch = _interopRequireDefault(require("./coin-pouch/CoinPouch"));

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Shopkeepr makes it easy for you to add merchants/stores/shopkeepers to your JavaScript game.
 */
module.exports = (_temp =
/*#__PURE__*/
function () {
  /**
   * The name of this shop.
   * 
   * @private
   * 
   * @property {string}
   */

  /**
   * A reference to the options for this instance of Shopkeepr.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the CoinPouch module.
   * 
   * @private
   * 
   * @property {CoinPouch}
   */

  /**
   * A reference to the inventory for this shop.
   * 
   * @private
   * 
   * @property {Inventory}
   */

  /**
   * @param {string} name The name of this shop.
   * @param {Object} [options]
   * @param {Array<string>} [options.currency=['gold']] Defines the currencies used in your game/this shop. Any amount of currencies can be used with the highest tier first and the rest in a desccending order. Each currency is worth 100 of the currency below.
   * @param {Array<number>} [options.initialGold=[100]] The amount of gold this shop starts out with. If you are not using the default currency, you have to specify it in the same order as you did the currency option.
   */
  function Shopkeepr(name, options) {
    _classCallCheck(this, Shopkeepr);

    _defineProperty(this, "_name", void 0);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_coinPouch", void 0);

    _defineProperty(this, "_inventory", new _Inventory["default"]());

    this._name = name;
    this._options = new _Options["default"](options);
    this._coinPouch = new _CoinPouch["default"](this._options);
  }
  /**
   * Returns the name of this shop.
   * 
   * @returns {string}
   */


  _createClass(Shopkeepr, [{
    key: "sell",

    /**
     * Sells an item from this shop.
     * 
     * This removes the item from the inventory and adds the cost of the item to the shop.
     * 
     * @param {Item} item A reference to the item to sell.
     */
    value: function sell(item) {
      this._coinPouch.add(item.sellPrice);

      this.inventory.removeItem(item);
    }
    /**
     * Buys an item from the player.
     * 
     * @param {Item} item A reference to the item to buy.
     */

  }, {
    key: "buy",
    value: function buy(item) {
      this._coinPouch.subtract(item.sellPrice);

      this.inventory.addItem(item);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * Returns the amount of money in the coin pouch.
     * 
     * @returns {number|Money}
     */

  }, {
    key: "wallet",
    get: function get() {
      return this._coinPouch.amount();
    }
    /**
     * Returns the main inventory of the shop.
     * 
     * @returns {Inventory}
     */

  }, {
    key: "inventory",
    get: function get() {
      return this._inventory;
    }
  }]);

  return Shopkeepr;
}(), _temp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsIm9wdGlvbnMiLCJJbnZlbnRvcnkiLCJfbmFtZSIsIl9vcHRpb25zIiwiT3B0aW9ucyIsIl9jb2luUG91Y2giLCJDb2luUG91Y2giLCJpdGVtIiwiYWRkIiwic2VsbFByaWNlIiwiaW52ZW50b3J5IiwicmVtb3ZlSXRlbSIsInN1YnRyYWN0IiwiYWRkSXRlbSIsImFtb3VudCIsIl9pbnZlbnRvcnkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUtBOzs7QUFHQUEsTUFBTSxDQUFDQyxPQUFQO0FBQUE7QUFBQTtBQUVFOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFNQSxxQkFBWUMsSUFBWixFQUEwQkMsT0FBMUIsRUFBMkM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSx3Q0FSWCxJQUFJQyxxQkFBSixFQVFXOztBQUV6QyxTQUFLQyxLQUFMLEdBQWFILElBQWI7QUFFQSxTQUFLSSxRQUFMLEdBQWdCLElBQUlDLG1CQUFKLENBQVlKLE9BQVosQ0FBaEI7QUFFQSxTQUFLSyxVQUFMLEdBQWtCLElBQUlDLHFCQUFKLENBQWMsS0FBS0gsUUFBbkIsQ0FBbEI7QUFFRDtBQUVEOzs7Ozs7O0FBdERGO0FBQUE7O0FBK0VFOzs7Ozs7O0FBL0VGLHlCQXNGT0ksSUF0RlAsRUFzRm1CO0FBRWYsV0FBS0YsVUFBTCxDQUFnQkcsR0FBaEIsQ0FBb0JELElBQUksQ0FBQ0UsU0FBekI7O0FBRUEsV0FBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSixJQUExQjtBQUVEO0FBRUQ7Ozs7OztBQTlGRjtBQUFBO0FBQUEsd0JBbUdNQSxJQW5HTixFQW1Ha0I7QUFFZCxXQUFLRixVQUFMLENBQWdCTyxRQUFoQixDQUF5QkwsSUFBSSxDQUFDRSxTQUE5Qjs7QUFFQSxXQUFLQyxTQUFMLENBQWVHLE9BQWYsQ0FBdUJOLElBQXZCO0FBRUQ7QUF6R0g7QUFBQTtBQUFBLHdCQTJEcUI7QUFBRSxhQUFPLEtBQUtMLEtBQVo7QUFBb0I7QUFFekM7Ozs7OztBQTdERjtBQUFBO0FBQUEsd0JBa0VpQztBQUU3QixhQUFPLEtBQUtHLFVBQUwsQ0FBZ0JTLE1BQWhCLEVBQVA7QUFFRDtBQUVEOzs7Ozs7QUF4RUY7QUFBQTtBQUFBLHdCQTZFNkI7QUFBRSxhQUFPLEtBQUtDLFVBQVo7QUFBeUI7QUE3RXhEOztBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9PcHRpb25zJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeS9JbnZlbnRvcnknO1xyXG5pbXBvcnQgQ29pblBvdWNoIGZyb20gJy4vY29pbi1wb3VjaC9Db2luUG91Y2gnO1xyXG5cclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pbnRlcmZhY2VzL0l0ZW0nO1xyXG5pbXBvcnQgTW9uZXkgZnJvbSAnLi9pbnRlcmZhY2VzL01vbmV5JztcclxuXHJcbi8qKlxyXG4gKiBTaG9wa2VlcHIgbWFrZXMgaXQgZWFzeSBmb3IgeW91IHRvIGFkZCBtZXJjaGFudHMvc3RvcmVzL3Nob3BrZWVwZXJzIHRvIHlvdXIgSmF2YVNjcmlwdCBnYW1lLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTaG9wa2VlcHIge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGlzIHNob3AuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIGluc3RhbmNlIG9mIFNob3BrZWVwci5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7T3B0aW9uc31cclxuICAgKi9cclxuICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgQ29pblBvdWNoIG1vZHVsZS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Q29pblBvdWNofVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvaW5Qb3VjaDogQ29pblBvdWNoO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW52ZW50b3J5IGZvciB0aGlzIHNob3AuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0ludmVudG9yeX1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbnZlbnRvcnk6IEludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhpcyBzaG9wLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IFtvcHRpb25zLmN1cnJlbmN5PVsnZ29sZCddXSBEZWZpbmVzIHRoZSBjdXJyZW5jaWVzIHVzZWQgaW4geW91ciBnYW1lL3RoaXMgc2hvcC4gQW55IGFtb3VudCBvZiBjdXJyZW5jaWVzIGNhbiBiZSB1c2VkIHdpdGggdGhlIGhpZ2hlc3QgdGllciBmaXJzdCBhbmQgdGhlIHJlc3QgaW4gYSBkZXNjY2VuZGluZyBvcmRlci4gRWFjaCBjdXJyZW5jeSBpcyB3b3J0aCAxMDAgb2YgdGhlIGN1cnJlbmN5IGJlbG93LlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuaW5pdGlhbEdvbGQ9WzEwMF1dIFRoZSBhbW91bnQgb2YgZ29sZCB0aGlzIHNob3Agc3RhcnRzIG91dCB3aXRoLiBJZiB5b3UgYXJlIG5vdCB1c2luZyB0aGUgZGVmYXVsdCBjdXJyZW5jeSwgeW91IGhhdmUgdG8gc3BlY2lmeSBpdCBpbiB0aGUgc2FtZSBvcmRlciBhcyB5b3UgZGlkIHRoZSBjdXJyZW5jeSBvcHRpb24uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvcHRpb25zOiBPYmplY3QpIHtcclxuXHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5fY29pblBvdWNoID0gbmV3IENvaW5Qb3VjaCh0aGlzLl9vcHRpb25zKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoaXMgc2hvcC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGFtb3VudCBvZiBtb25leSBpbiB0aGUgY29pbiBwb3VjaC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfE1vbmV5fVxyXG4gICAqL1xyXG4gIGdldCB3YWxsZXQoKTogKG51bWJlciB8IE1vbmV5KSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NvaW5Qb3VjaC5hbW91bnQoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBtYWluIGludmVudG9yeSBvZiB0aGUgc2hvcC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SW52ZW50b3J5fVxyXG4gICAqL1xyXG4gIGdldCBpbnZlbnRvcnkoKTogSW52ZW50b3J5IHsgcmV0dXJuIHRoaXMuX2ludmVudG9yeTsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxscyBhbiBpdGVtIGZyb20gdGhpcyBzaG9wLlxyXG4gICAqIFxyXG4gICAqIFRoaXMgcmVtb3ZlcyB0aGUgaXRlbSBmcm9tIHRoZSBpbnZlbnRvcnkgYW5kIGFkZHMgdGhlIGNvc3Qgb2YgdGhlIGl0ZW0gdG8gdGhlIHNob3AuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIEEgcmVmZXJlbmNlIHRvIHRoZSBpdGVtIHRvIHNlbGwuXHJcbiAgICovXHJcbiAgc2VsbChpdGVtOiBJdGVtKSB7XHJcblxyXG4gICAgdGhpcy5fY29pblBvdWNoLmFkZChpdGVtLnNlbGxQcmljZSk7XHJcblxyXG4gICAgdGhpcy5pbnZlbnRvcnkucmVtb3ZlSXRlbShpdGVtKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdXlzIGFuIGl0ZW0gZnJvbSB0aGUgcGxheWVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBBIHJlZmVyZW5jZSB0byB0aGUgaXRlbSB0byBidXkuXHJcbiAgICovXHJcbiAgYnV5KGl0ZW06IEl0ZW0pIHtcclxuXHJcbiAgICB0aGlzLl9jb2luUG91Y2guc3VidHJhY3QoaXRlbS5zZWxsUHJpY2UpO1xyXG5cclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcblxyXG4gIH1cclxuXHJcbn07Il19