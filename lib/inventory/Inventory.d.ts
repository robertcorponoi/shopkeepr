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
    private _items;
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
    addItem(item: Item): void;
    /**
     * Gets a specific item from this inventory.
     *
     * @param {string} name The name of the item to get from this inventory.
     *
     * @returns {Item|undefined} Returns the matching item or undefined if the item doesn't exist in this inventory.
     */
    getItem(name: string): (Item | undefined);
    /**
     * Gets items that belong to one or more filters.
     *
     * Using this without any arguments will return all items from the inventory.
     *
     * @param {Array<string>} [filters=[]] The filters to search for.
     *
     * @returns {Array<Item>} Returns the matching items or an empty array.
     */
    getItems(filters?: Array<string>): Array<Item>;
    /**
     * Removes an item from the inventory.
     *
     * @param {Item} item The item to remove from the intentory.
     */
    removeItem(item: Item): void;
}
