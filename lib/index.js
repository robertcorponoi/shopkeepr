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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsIm9wdGlvbnMiLCJJbnZlbnRvcnkiLCJfbmFtZSIsIl9vcHRpb25zIiwiT3B0aW9ucyIsIl9jb2luUG91Y2giLCJDb2luUG91Y2giLCJpdGVtIiwiYWRkIiwic2VsbFByaWNlIiwiaW52ZW50b3J5IiwicmVtb3ZlSXRlbSIsInN1YnRyYWN0IiwiYWRkSXRlbSIsImFtb3VudCIsIl9pbnZlbnRvcnkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUtBOzs7QUFHQUEsTUFBTSxDQUFDQyxPQUFQO0FBQUE7QUFBQTtBQUNFOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFNQSxxQkFBWUMsSUFBWixFQUEwQkMsT0FBMUIsRUFBMkM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSx3Q0FSWCxJQUFJQyxxQkFBSixFQVFXOztBQUV6QyxTQUFLQyxLQUFMLEdBQWFILElBQWI7QUFFQSxTQUFLSSxRQUFMLEdBQWdCLElBQUlDLG1CQUFKLENBQVlKLE9BQVosQ0FBaEI7QUFFQSxTQUFLSyxVQUFMLEdBQWtCLElBQUlDLHFCQUFKLENBQWMsS0FBS0gsUUFBbkIsQ0FBbEI7QUFFRDtBQUVEOzs7Ozs7O0FBckRGO0FBQUE7O0FBOEVFOzs7Ozs7O0FBOUVGLHlCQXFGT0ksSUFyRlAsRUFxRm1CO0FBRWYsV0FBS0YsVUFBTCxDQUFnQkcsR0FBaEIsQ0FBb0JELElBQUksQ0FBQ0UsU0FBekI7O0FBRUEsV0FBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSixJQUExQjtBQUVEO0FBRUQ7Ozs7OztBQTdGRjtBQUFBO0FBQUEsd0JBa0dNQSxJQWxHTixFQWtHa0I7QUFFZCxXQUFLRixVQUFMLENBQWdCTyxRQUFoQixDQUF5QkwsSUFBSSxDQUFDRSxTQUE5Qjs7QUFFQSxXQUFLQyxTQUFMLENBQWVHLE9BQWYsQ0FBdUJOLElBQXZCO0FBRUQ7QUF4R0g7QUFBQTtBQUFBLHdCQTBEcUI7QUFBRSxhQUFPLEtBQUtMLEtBQVo7QUFBb0I7QUFFekM7Ozs7OztBQTVERjtBQUFBO0FBQUEsd0JBaUVpQztBQUU3QixhQUFPLEtBQUtHLFVBQUwsQ0FBZ0JTLE1BQWhCLEVBQVA7QUFFRDtBQUVEOzs7Ozs7QUF2RUY7QUFBQTtBQUFBLHdCQTRFNkI7QUFBRSxhQUFPLEtBQUtDLFVBQVo7QUFBeUI7QUE1RXhEOztBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9PcHRpb25zJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeS9JbnZlbnRvcnknO1xyXG5pbXBvcnQgQ29pblBvdWNoIGZyb20gJy4vY29pbi1wb3VjaC9Db2luUG91Y2gnO1xyXG5cclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pbnRlcmZhY2VzL0l0ZW0nO1xyXG5pbXBvcnQgTW9uZXkgZnJvbSAnLi9pbnRlcmZhY2VzL01vbmV5JztcclxuXHJcbi8qKlxyXG4gKiBTaG9wa2VlcHIgbWFrZXMgaXQgZWFzeSBmb3IgeW91IHRvIGFkZCBtZXJjaGFudHMvc3RvcmVzL3Nob3BrZWVwZXJzIHRvIHlvdXIgSmF2YVNjcmlwdCBnYW1lLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTaG9wa2VlcHIge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoaXMgc2hvcC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgU2hvcGtlZXByLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBDb2luUG91Y2ggbW9kdWxlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtDb2luUG91Y2h9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29pblBvdWNoOiBDb2luUG91Y2g7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnZlbnRvcnkgZm9yIHRoaXMgc2hvcC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SW52ZW50b3J5fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ludmVudG9yeTogSW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHNob3AuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW29wdGlvbnMuY3VycmVuY3k9Wydnb2xkJ11dIERlZmluZXMgdGhlIGN1cnJlbmNpZXMgdXNlZCBpbiB5b3VyIGdhbWUvdGhpcyBzaG9wLiBBbnkgYW1vdW50IG9mIGN1cnJlbmNpZXMgY2FuIGJlIHVzZWQgd2l0aCB0aGUgaGlnaGVzdCB0aWVyIGZpcnN0IGFuZCB0aGUgcmVzdCBpbiBhIGRlc2NjZW5kaW5nIG9yZGVyLiBFYWNoIGN1cnJlbmN5IGlzIHdvcnRoIDEwMCBvZiB0aGUgY3VycmVuY3kgYmVsb3cuXHJcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5pbml0aWFsR29sZD1bMTAwXV0gVGhlIGFtb3VudCBvZiBnb2xkIHRoaXMgc2hvcCBzdGFydHMgb3V0IHdpdGguIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZSBkZWZhdWx0IGN1cnJlbmN5LCB5b3UgaGF2ZSB0byBzcGVjaWZ5IGl0IGluIHRoZSBzYW1lIG9yZGVyIGFzIHlvdSBkaWQgdGhlIGN1cnJlbmN5IG9wdGlvbi5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IE9iamVjdCkge1xyXG5cclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9jb2luUG91Y2ggPSBuZXcgQ29pblBvdWNoKHRoaXMuX29wdGlvbnMpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhpcyBzaG9wLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgYW1vdW50IG9mIG1vbmV5IGluIHRoZSBjb2luIHBvdWNoLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8TW9uZXl9XHJcbiAgICovXHJcbiAgZ2V0IHdhbGxldCgpOiAobnVtYmVyIHwgTW9uZXkpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY29pblBvdWNoLmFtb3VudCgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG1haW4gaW52ZW50b3J5IG9mIHRoZSBzaG9wLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtJbnZlbnRvcnl9XHJcbiAgICovXHJcbiAgZ2V0IGludmVudG9yeSgpOiBJbnZlbnRvcnkgeyByZXR1cm4gdGhpcy5faW52ZW50b3J5OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGxzIGFuIGl0ZW0gZnJvbSB0aGlzIHNob3AuXHJcbiAgICogXHJcbiAgICogVGhpcyByZW1vdmVzIHRoZSBpdGVtIGZyb20gdGhlIGludmVudG9yeSBhbmQgYWRkcyB0aGUgY29zdCBvZiB0aGUgaXRlbSB0byB0aGUgc2hvcC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gQSByZWZlcmVuY2UgdG8gdGhlIGl0ZW0gdG8gc2VsbC5cclxuICAgKi9cclxuICBzZWxsKGl0ZW06IEl0ZW0pIHtcclxuXHJcbiAgICB0aGlzLl9jb2luUG91Y2guYWRkKGl0ZW0uc2VsbFByaWNlKTtcclxuXHJcbiAgICB0aGlzLmludmVudG9yeS5yZW1vdmVJdGVtKGl0ZW0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1eXMgYW4gaXRlbSBmcm9tIHRoZSBwbGF5ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIEEgcmVmZXJlbmNlIHRvIHRoZSBpdGVtIHRvIGJ1eS5cclxuICAgKi9cclxuICBidXkoaXRlbTogSXRlbSkge1xyXG5cclxuICAgIHRoaXMuX2NvaW5Qb3VjaC5zdWJ0cmFjdChpdGVtLnNlbGxQcmljZSk7XHJcblxyXG4gICAgdGhpcy5pbnZlbnRvcnkuYWRkSXRlbShpdGVtKTtcclxuXHJcbiAgfVxyXG5cclxufTsiXX0=