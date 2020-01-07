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
 * Keeps track of the inventory for the shop.
 */
var Inventory =
/*#__PURE__*/
function () {
  function Inventory() {
    _classCallCheck(this, Inventory);

    _defineProperty(this, "_items", []);
  }

  _createClass(Inventory, [{
    key: "addItem",

    /**
     * Adds an item to the inventory.
     * 
     * An item can have any number of properties but it must have the following:
     * 
     * name:      The name of the item.
     * sellPrice: The price that this shop will sell the item for.
     * buyPrice:  The price that this shop will buy the item for from the player.
     * filter:    (Optional) An array of filters that can be applied to find this item and similar items.
     * 
     * @param {Item} item The item to add to the inventory.
     */
    value: function addItem(item) {
      if (!item.hasOwnProperty('name') || !item.hasOwnProperty('sellPrice') || !item.hasOwnProperty('buyPrice')) throw new Error('Items must have name and price properties');

      this._items.push(item);
    }
    /**
     * Gets a specific item from this inventory.
     * 
     * @param {string} name The name of the item to get from this inventory.
     * 
     * @returns {Item|undefined} Returns the matching item or undefined if the item doesn't exist in this inventory.
     */

  }, {
    key: "getItem",
    value: function getItem(name) {
      return this._items.find(function (it) {
        return it.name === name;
      });
    }
    /**
     * Gets items that belong to one or more filters.
     * 
     * Using this without any arguments will return all items from the inventory.
     * 
     * @param {Array<string>} [filters=[]] The filters to search for.
     * 
     * @returns {Array<Item>} Returns the matching items or an empty array.
     */

  }, {
    key: "getItems",
    value: function getItems() {
      var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (filters.length === 0) return this._items;
      return this._items.filter(function (item) {
        return item.filters.some(function (f) {
          return filters.includes(f);
        });
      });
    }
  }, {
    key: "removeItem",

    /**
     * Removes an item from the inventory.
     * 
     * @param {Item} item The item to remove from the intentory.
     */
    value: function removeItem(item) {
      this._items = this._items.filter(function (it) {
        return it !== item;
      });
    }
  }]);

  return Inventory;
}();

exports["default"] = Inventory;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnZlbnRvcnkvSW52ZW50b3J5LnRzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiX2l0ZW1zIiwicHVzaCIsIm5hbWUiLCJmaW5kIiwiaXQiLCJmaWx0ZXJzIiwibGVuZ3RoIiwiZmlsdGVyIiwic29tZSIsImYiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLFM7Ozs7OztvQ0FXVyxFOzs7Ozs7QUFFOUI7Ozs7Ozs7Ozs7Ozs0QkFZUUMsSSxFQUFZO0FBQ2xCLFVBQUksQ0FBQ0EsSUFBSSxDQUFDQyxjQUFMLENBQW9CLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQ0QsSUFBSSxDQUFDQyxjQUFMLENBQW9CLFdBQXBCLENBQWpDLElBQXFFLENBQUNELElBQUksQ0FBQ0MsY0FBTCxDQUFvQixVQUFwQixDQUExRSxFQUEyRyxNQUFNLElBQUlDLEtBQUosQ0FBVSwyQ0FBVixDQUFOOztBQUUzRyxXQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUJKLElBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs0QkFPUUssSSxFQUFrQztBQUN4QyxhQUFPLEtBQUtGLE1BQUwsQ0FBWUcsSUFBWixDQUFpQixVQUFDQyxFQUFEO0FBQUEsZUFBY0EsRUFBRSxDQUFDRixJQUFILEtBQVlBLElBQTFCO0FBQUEsT0FBakIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OzsrQkFTbUQ7QUFBQSxVQUExQ0csT0FBMEMsdUVBQWpCLEVBQWlCO0FBQ2pELFVBQUlBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQixDQUF2QixFQUEwQixPQUFPLEtBQUtOLE1BQVo7QUFFMUIsYUFBTyxLQUFLQSxNQUFMLENBQVlPLE1BQVosQ0FBbUIsVUFBQ1YsSUFBRCxFQUFnQjtBQUN4QyxlQUFPQSxJQUFJLENBQUNRLE9BQUwsQ0FBYUcsSUFBYixDQUFrQixVQUFDQyxDQUFEO0FBQUEsaUJBQWVKLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkQsQ0FBakIsQ0FBZjtBQUFBLFNBQWxCLENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7OztBQUVEOzs7OzsrQkFLV1osSSxFQUFZO0FBQ3JCLFdBQUtHLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlPLE1BQVosQ0FBbUIsVUFBQ0gsRUFBRDtBQUFBLGVBQWNBLEVBQUUsS0FBS1AsSUFBckI7QUFBQSxPQUFuQixDQUFkO0FBQ0Q7Ozs7Ozs7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JdGVtJztcclxuXHJcbi8qKlxyXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgaW52ZW50b3J5IGZvciB0aGUgc2hvcC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpdGVtcyB0aGF0IGFyZSBhIHBhcnQgb2YgdGhpcyBpbnZlbnRvcnkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PEl0ZW0+fVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IFtdXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaXRlbXM6IEFycmF5PEl0ZW0+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gaXRlbSB0byB0aGUgaW52ZW50b3J5LlxyXG4gICAqIFxyXG4gICAqIEFuIGl0ZW0gY2FuIGhhdmUgYW55IG51bWJlciBvZiBwcm9wZXJ0aWVzIGJ1dCBpdCBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZzpcclxuICAgKiBcclxuICAgKiBuYW1lOiAgICAgIFRoZSBuYW1lIG9mIHRoZSBpdGVtLlxyXG4gICAqIHNlbGxQcmljZTogVGhlIHByaWNlIHRoYXQgdGhpcyBzaG9wIHdpbGwgc2VsbCB0aGUgaXRlbSBmb3IuXHJcbiAgICogYnV5UHJpY2U6ICBUaGUgcHJpY2UgdGhhdCB0aGlzIHNob3Agd2lsbCBidXkgdGhlIGl0ZW0gZm9yIGZyb20gdGhlIHBsYXllci5cclxuICAgKiBmaWx0ZXI6ICAgIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgZmlsdGVycyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGZpbmQgdGhpcyBpdGVtIGFuZCBzaW1pbGFyIGl0ZW1zLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbSB0byBhZGQgdG8gdGhlIGludmVudG9yeS5cclxuICAgKi9cclxuICBhZGRJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGlmICghaXRlbS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpIHx8ICFpdGVtLmhhc093blByb3BlcnR5KCdzZWxsUHJpY2UnKSB8fCAhaXRlbS5oYXNPd25Qcm9wZXJ0eSgnYnV5UHJpY2UnKSkgdGhyb3cgbmV3IEVycm9yKCdJdGVtcyBtdXN0IGhhdmUgbmFtZSBhbmQgcHJpY2UgcHJvcGVydGllcycpO1xyXG5cclxuICAgIHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGEgc3BlY2lmaWMgaXRlbSBmcm9tIHRoaXMgaW52ZW50b3J5LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBpdGVtIHRvIGdldCBmcm9tIHRoaXMgaW52ZW50b3J5LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtJdGVtfHVuZGVmaW5lZH0gUmV0dXJucyB0aGUgbWF0Y2hpbmcgaXRlbSBvciB1bmRlZmluZWQgaWYgdGhlIGl0ZW0gZG9lc24ndCBleGlzdCBpbiB0aGlzIGludmVudG9yeS5cclxuICAgKi9cclxuICBnZXRJdGVtKG5hbWU6IHN0cmluZyk6IChJdGVtIHwgdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuZmluZCgoaXQ6IEl0ZW0pID0+IGl0Lm5hbWUgPT09IG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBpdGVtcyB0aGF0IGJlbG9uZyB0byBvbmUgb3IgbW9yZSBmaWx0ZXJzLlxyXG4gICAqIFxyXG4gICAqIFVzaW5nIHRoaXMgd2l0aG91dCBhbnkgYXJndW1lbnRzIHdpbGwgcmV0dXJuIGFsbCBpdGVtcyBmcm9tIHRoZSBpbnZlbnRvcnkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbZmlsdGVycz1bXV0gVGhlIGZpbHRlcnMgdG8gc2VhcmNoIGZvci5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7QXJyYXk8SXRlbT59IFJldHVybnMgdGhlIG1hdGNoaW5nIGl0ZW1zIG9yIGFuIGVtcHR5IGFycmF5LlxyXG4gICAqL1xyXG4gIGdldEl0ZW1zKGZpbHRlcnM6IEFycmF5PHN0cmluZz4gPSBbXSk6IEFycmF5PEl0ZW0+IHtcclxuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5maWx0ZXIoKGl0ZW06IEl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0uZmlsdGVycy5zb21lKChmOiBzdHJpbmcpID0+IGZpbHRlcnMuaW5jbHVkZXMoZikpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGludmVudG9yeS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gdGhlIGludGVudG9yeS5cclxuICAgKi9cclxuICByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gdGhpcy5faXRlbXMuZmlsdGVyKChpdDogSXRlbSkgPT4gaXQgIT09IGl0ZW0pO1xyXG4gIH1cclxuXHJcbn07Il19