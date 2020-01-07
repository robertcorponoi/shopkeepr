'use strict'

import Item from '../interfaces/Item';

/**
 * Keeps track of the inventory for the shop.
 */
export default class Inventory {

  /**
   * The items that are a part of this inventory.
   * 
   * @private
   * 
   * @property {Array<Item>}
   * 
   * @default []
   */
  private _items: Array<Item> = [];

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
  addItem(item: Item) {
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
  getItem(name: string): (Item | undefined) {
    return this._items.find((it: Item) => it.name === name);
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
  getItems(filters: Array<string> = []): Array<Item> {
    if (filters.length === 0) return this._items;

    return this._items.filter((item: Item) => {
      return item.filters.some((f: string) => filters.includes(f));
    });
  };

  /**
   * Removes an item from the inventory.
   * 
   * @param {Item} item The item to remove from the intentory.
   */
  removeItem(item: Item) {
    this._items = this._items.filter((it: Item) => it !== item);
  }

};