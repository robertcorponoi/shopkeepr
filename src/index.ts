'use strict'

import Options from './options/Options';
import Inventory from './inventory/Inventory';
import CoinPouch from './coin-pouch/CoinPouch';

import Item from './interfaces/Item';
import Money from './interfaces/Money';

/**
 * Shopkeepr makes it easy for you to add merchants/stores/shopkeepers to your JavaScript game.
 */
module.exports = class Shopkeepr {

  /**
   * The name of this shop.
   * 
   * @private
   * 
   * @property {string}
   */
  private _name: string;

  /**
   * A reference to the options for this instance of Shopkeepr.
   * 
   * @private
   * 
   * @property {Options}
   */
  private _options: Options;

  /**
   * A reference to the CoinPouch module.
   * 
   * @private
   * 
   * @property {CoinPouch}
   */
  private _coinPouch: CoinPouch;

  /**
   * A reference to the inventory for this shop.
   * 
   * @private
   * 
   * @property {Inventory}
   */
  private _inventory: Inventory = new Inventory();

  /**
   * @param {string} name The name of this shop.
   * @param {Object} [options]
   * @param {Array<string>} [options.currency=['gold']] Defines the currencies used in your game/this shop. Any amount of currencies can be used with the highest tier first and the rest in a desccending order. Each currency is worth 100 of the currency below.
   * @param {Array<number>} [options.initialGold=[100]] The amount of gold this shop starts out with. If you are not using the default currency, you have to specify it in the same order as you did the currency option.
   */
  constructor(name: string, options: Object) {

    this._name = name;

    this._options = new Options(options);

    this._coinPouch = new CoinPouch(this._options);

  }

  /**
   * Returns the name of this shop.
   * 
   * @returns {string}
   */
  get name(): string { return this._name; }

  /**
   * Returns the amount of money in the coin pouch.
   * 
   * @returns {number|Money}
   */
  get wallet(): (number | Money) {

    return this._coinPouch.amount();

  }

  /**
   * Returns the main inventory of the shop.
   * 
   * @returns {Inventory}
   */
  get inventory(): Inventory { return this._inventory; }

  /**
   * Sells an item from this shop.
   * 
   * This removes the item from the inventory and adds the cost of the item to the shop.
   * 
   * @param {Item} item A reference to the item to sell.
   */
  sell(item: Item) {

    this._coinPouch.add(item.sellPrice);

    this.inventory.removeItem(item);

  }

  /**
   * Buys an item from the player.
   * 
   * @param {Item} item A reference to the item to buy.
   */
  buy(item: Item) {

    this._coinPouch.subtract(item.sellPrice);

    this.inventory.addItem(item);

  }

};