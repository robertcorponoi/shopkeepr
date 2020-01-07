'use strict';
/**
 * Defines the options available for an instance of Shopkeepr.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Options =
/**
 * Defines the currencies used in your game/this shop.
 * 
 * Any amount of currencies can be used with the highest tier first and the rest in a desccending order. Each currency is worth
 * 100 of the currency below.
 * 
 * For example, if you have ['gold', 'silver', 'copper'], 1 gold = 100 silver and 1 silver = 100 copper.
 * 
 * By default there is only a single currency, gold.
 * 
 * @default ['gold']
 * 
 * @example
 * 
 * ['gold', 'silver', 'copper']
 */

/**
 * The amount of gold this shop starts out with.
 * 
 * If you are not using the default currency, you have to specify it in the same order as you did the currency option.
 * 
 * For example, if you have ['gold', 'silver', 'copper'] set as the currency, you have to specify gold as [0, 0, 0] or whatever
 * amount you want the shop to have.
 * 
 * @property {number}
 * 
 * @default [100]
 * 
 * @example
 * 
 * [0, 0, 100]
 */

/**
 * The tax percentage for items bought from this shop.
 * 
 * @property {number}
 * 
 * @default 0
 * 
 * @example
 * 
 * 0.15
 */

/**
 * @param {Object} [options]
 * @param {Array<string>} [options.currency=['gold']] Defines the currencies used in your game/this shop. Any amount of currencies can be used with the highest tier first and the rest in a desccending order. Each currency is worth 100 of the currency below.
 * @param {Array<number>} [options.initialGold=[100]] The amount of gold this shop starts out with. If you are not using the default currency, you have to specify it in the same order as you did the currency option.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "currency", ['gold']);

  _defineProperty(this, "startingMoney", [100]);

  _defineProperty(this, "tax", 0);

  Object.assign(this, options);
};

exports["default"] = Options;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7O0FBS0EsaUJBQVlDLE9BQVosRUFBNkI7QUFBQTs7QUFBQSxvQ0F0Q0gsQ0FBQyxNQUFELENBc0NHOztBQUFBLHlDQXBCRSxDQUFDLEdBQUQsQ0FvQkY7O0FBQUEsK0JBUGYsQ0FPZTs7QUFDM0JDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBQ0QsQzs7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBvcHRpb25zIGF2YWlsYWJsZSBmb3IgYW4gaW5zdGFuY2Ugb2YgU2hvcGtlZXByLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMgdGhlIGN1cnJlbmNpZXMgdXNlZCBpbiB5b3VyIGdhbWUvdGhpcyBzaG9wLlxyXG4gICAqIFxyXG4gICAqIEFueSBhbW91bnQgb2YgY3VycmVuY2llcyBjYW4gYmUgdXNlZCB3aXRoIHRoZSBoaWdoZXN0IHRpZXIgZmlyc3QgYW5kIHRoZSByZXN0IGluIGEgZGVzY2NlbmRpbmcgb3JkZXIuIEVhY2ggY3VycmVuY3kgaXMgd29ydGhcclxuICAgKiAxMDAgb2YgdGhlIGN1cnJlbmN5IGJlbG93LlxyXG4gICAqIFxyXG4gICAqIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBbJ2dvbGQnLCAnc2lsdmVyJywgJ2NvcHBlciddLCAxIGdvbGQgPSAxMDAgc2lsdmVyIGFuZCAxIHNpbHZlciA9IDEwMCBjb3BwZXIuXHJcbiAgICogXHJcbiAgICogQnkgZGVmYXVsdCB0aGVyZSBpcyBvbmx5IGEgc2luZ2xlIGN1cnJlbmN5LCBnb2xkLlxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IFsnZ29sZCddXHJcbiAgICogXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBcclxuICAgKiBbJ2dvbGQnLCAnc2lsdmVyJywgJ2NvcHBlciddXHJcbiAgICovXHJcbiAgY3VycmVuY3k6IEFycmF5PHN0cmluZz4gPSBbJ2dvbGQnXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiBnb2xkIHRoaXMgc2hvcCBzdGFydHMgb3V0IHdpdGguXHJcbiAgICogXHJcbiAgICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlIGRlZmF1bHQgY3VycmVuY3ksIHlvdSBoYXZlIHRvIHNwZWNpZnkgaXQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeW91IGRpZCB0aGUgY3VycmVuY3kgb3B0aW9uLlxyXG4gICAqIFxyXG4gICAqIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBbJ2dvbGQnLCAnc2lsdmVyJywgJ2NvcHBlciddIHNldCBhcyB0aGUgY3VycmVuY3ksIHlvdSBoYXZlIHRvIHNwZWNpZnkgZ29sZCBhcyBbMCwgMCwgMF0gb3Igd2hhdGV2ZXJcclxuICAgKiBhbW91bnQgeW91IHdhbnQgdGhlIHNob3AgdG8gaGF2ZS5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCBbMTAwXVxyXG4gICAqIFxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogXHJcbiAgICogWzAsIDAsIDEwMF1cclxuICAgKi9cclxuICBzdGFydGluZ01vbmV5OiBBcnJheTxudW1iZXI+ID0gWzEwMF07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0YXggcGVyY2VudGFnZSBmb3IgaXRlbXMgYm91Z2h0IGZyb20gdGhpcyBzaG9wLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKiBcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIFxyXG4gICAqIDAuMTVcclxuICAgKi9cclxuICB0YXg6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IFtvcHRpb25zLmN1cnJlbmN5PVsnZ29sZCddXSBEZWZpbmVzIHRoZSBjdXJyZW5jaWVzIHVzZWQgaW4geW91ciBnYW1lL3RoaXMgc2hvcC4gQW55IGFtb3VudCBvZiBjdXJyZW5jaWVzIGNhbiBiZSB1c2VkIHdpdGggdGhlIGhpZ2hlc3QgdGllciBmaXJzdCBhbmQgdGhlIHJlc3QgaW4gYSBkZXNjY2VuZGluZyBvcmRlci4gRWFjaCBjdXJyZW5jeSBpcyB3b3J0aCAxMDAgb2YgdGhlIGN1cnJlbmN5IGJlbG93LlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuaW5pdGlhbEdvbGQ9WzEwMF1dIFRoZSBhbW91bnQgb2YgZ29sZCB0aGlzIHNob3Agc3RhcnRzIG91dCB3aXRoLiBJZiB5b3UgYXJlIG5vdCB1c2luZyB0aGUgZGVmYXVsdCBjdXJyZW5jeSwgeW91IGhhdmUgdG8gc3BlY2lmeSBpdCBpbiB0aGUgc2FtZSBvcmRlciBhcyB5b3UgZGlkIHRoZSBjdXJyZW5jeSBvcHRpb24uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbn07Il19