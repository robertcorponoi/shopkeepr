function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

var _temp;

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

    _defineProperty(this, "_inventory", new Inventory());

    this._name = name;
    this._options = new Options(options);
    this._coinPouch = new CoinPouch(this._options);
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
