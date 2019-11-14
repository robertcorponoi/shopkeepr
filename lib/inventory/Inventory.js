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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnZlbnRvcnkvSW52ZW50b3J5LnRzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiX2l0ZW1zIiwicHVzaCIsIm5hbWUiLCJmaW5kIiwiaXQiLCJmaWx0ZXJzIiwibGVuZ3RoIiwiZmlsdGVyIiwic29tZSIsImYiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLFM7Ozs7OztvQ0FXVyxFOzs7Ozs7QUFFOUI7Ozs7Ozs7Ozs7Ozs0QkFZUUMsSSxFQUFZO0FBRWxCLFVBQUksQ0FBQ0EsSUFBSSxDQUFDQyxjQUFMLENBQW9CLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQ0QsSUFBSSxDQUFDQyxjQUFMLENBQW9CLFdBQXBCLENBQWpDLElBQXFFLENBQUNELElBQUksQ0FBQ0MsY0FBTCxDQUFvQixVQUFwQixDQUExRSxFQUEyRyxNQUFNLElBQUlDLEtBQUosQ0FBVSwyQ0FBVixDQUFOOztBQUUzRyxXQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUJKLElBQWpCO0FBRUQ7QUFFRDs7Ozs7Ozs7Ozs0QkFPUUssSSxFQUFrQztBQUV4QyxhQUFPLEtBQUtGLE1BQUwsQ0FBWUcsSUFBWixDQUFpQixVQUFDQyxFQUFEO0FBQUEsZUFBY0EsRUFBRSxDQUFDRixJQUFILEtBQVlBLElBQTFCO0FBQUEsT0FBakIsQ0FBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7OzsrQkFTbUQ7QUFBQSxVQUExQ0csT0FBMEMsdUVBQWpCLEVBQWlCO0FBRWpELFVBQUlBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQixDQUF2QixFQUEwQixPQUFPLEtBQUtOLE1BQVo7QUFFMUIsYUFBTyxLQUFLQSxNQUFMLENBQVlPLE1BQVosQ0FBbUIsVUFBQ1YsSUFBRCxFQUFnQjtBQUV4QyxlQUFPQSxJQUFJLENBQUNRLE9BQUwsQ0FBYUcsSUFBYixDQUFrQixVQUFDQyxDQUFEO0FBQUEsaUJBQWVKLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkQsQ0FBakIsQ0FBZjtBQUFBLFNBQWxCLENBQVA7QUFFRCxPQUpNLENBQVA7QUFNRDs7OztBQUVEOzs7OzsrQkFLV1osSSxFQUFZO0FBRXJCLFdBQUtHLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlPLE1BQVosQ0FBbUIsVUFBQ0gsRUFBRDtBQUFBLGVBQWNBLEVBQUUsS0FBS1AsSUFBckI7QUFBQSxPQUFuQixDQUFkO0FBRUQ7Ozs7Ozs7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JdGVtJztcclxuXHJcbi8qKlxyXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgaW52ZW50b3J5IGZvciB0aGUgc2hvcC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpdGVtcyB0aGF0IGFyZSBhIHBhcnQgb2YgdGhpcyBpbnZlbnRvcnkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PEl0ZW0+fVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IFtdXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaXRlbXM6IEFycmF5PEl0ZW0+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gaXRlbSB0byB0aGUgaW52ZW50b3J5LlxyXG4gICAqIFxyXG4gICAqIEFuIGl0ZW0gY2FuIGhhdmUgYW55IG51bWJlciBvZiBwcm9wZXJ0aWVzIGJ1dCBpdCBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZzpcclxuICAgKiBcclxuICAgKiBuYW1lOiAgICAgIFRoZSBuYW1lIG9mIHRoZSBpdGVtLlxyXG4gICAqIHNlbGxQcmljZTogVGhlIHByaWNlIHRoYXQgdGhpcyBzaG9wIHdpbGwgc2VsbCB0aGUgaXRlbSBmb3IuXHJcbiAgICogYnV5UHJpY2U6ICBUaGUgcHJpY2UgdGhhdCB0aGlzIHNob3Agd2lsbCBidXkgdGhlIGl0ZW0gZm9yIGZyb20gdGhlIHBsYXllci5cclxuICAgKiBmaWx0ZXI6ICAgIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgZmlsdGVycyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGZpbmQgdGhpcyBpdGVtIGFuZCBzaW1pbGFyIGl0ZW1zLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbSB0byBhZGQgdG8gdGhlIGludmVudG9yeS5cclxuICAgKi9cclxuICBhZGRJdGVtKGl0ZW06IEl0ZW0pIHtcclxuXHJcbiAgICBpZiAoIWl0ZW0uaGFzT3duUHJvcGVydHkoJ25hbWUnKSB8fCAhaXRlbS5oYXNPd25Qcm9wZXJ0eSgnc2VsbFByaWNlJykgfHwgIWl0ZW0uaGFzT3duUHJvcGVydHkoJ2J1eVByaWNlJykpIHRocm93IG5ldyBFcnJvcignSXRlbXMgbXVzdCBoYXZlIG5hbWUgYW5kIHByaWNlIHByb3BlcnRpZXMnKTtcclxuXHJcbiAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSBzcGVjaWZpYyBpdGVtIGZyb20gdGhpcyBpbnZlbnRvcnkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGl0ZW0gdG8gZ2V0IGZyb20gdGhpcyBpbnZlbnRvcnkuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0l0ZW18dW5kZWZpbmVkfSBSZXR1cm5zIHRoZSBtYXRjaGluZyBpdGVtIG9yIHVuZGVmaW5lZCBpZiB0aGUgaXRlbSBkb2Vzbid0IGV4aXN0IGluIHRoaXMgaW52ZW50b3J5LlxyXG4gICAqL1xyXG4gIGdldEl0ZW0obmFtZTogc3RyaW5nKTogKEl0ZW0gfCB1bmRlZmluZWQpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuZmluZCgoaXQ6IEl0ZW0pID0+IGl0Lm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgaXRlbXMgdGhhdCBiZWxvbmcgdG8gb25lIG9yIG1vcmUgZmlsdGVycy5cclxuICAgKiBcclxuICAgKiBVc2luZyB0aGlzIHdpdGhvdXQgYW55IGFyZ3VtZW50cyB3aWxsIHJldHVybiBhbGwgaXRlbXMgZnJvbSB0aGUgaW52ZW50b3J5LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW2ZpbHRlcnM9W11dIFRoZSBmaWx0ZXJzIHRvIHNlYXJjaCBmb3IuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0FycmF5PEl0ZW0+fSBSZXR1cm5zIHRoZSBtYXRjaGluZyBpdGVtcyBvciBhbiBlbXB0eSBhcnJheS5cclxuICAgKi9cclxuICBnZXRJdGVtcyhmaWx0ZXJzOiBBcnJheTxzdHJpbmc+ID0gW10pOiBBcnJheTxJdGVtPiB7XHJcblxyXG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcy5faXRlbXM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmZpbHRlcigoaXRlbTogSXRlbSkgPT4ge1xyXG5cclxuICAgICAgcmV0dXJuIGl0ZW0uZmlsdGVycy5zb21lKChmOiBzdHJpbmcpID0+IGZpbHRlcnMuaW5jbHVkZXMoZikpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgaW52ZW50b3J5LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbSB0byByZW1vdmUgZnJvbSB0aGUgaW50ZW50b3J5LlxyXG4gICAqL1xyXG4gIHJlbW92ZUl0ZW0oaXRlbTogSXRlbSkge1xyXG5cclxuICAgIHRoaXMuX2l0ZW1zID0gdGhpcy5faXRlbXMuZmlsdGVyKChpdDogSXRlbSkgPT4gaXQgIT09IGl0ZW0pO1xyXG5cclxuICB9XHJcblxyXG59OyJdfQ==