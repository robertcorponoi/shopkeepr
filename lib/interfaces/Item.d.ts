import GoldAmount from './Money';
/**
 * An item can contain any number of properties but it must have a name and price.
 */
export default interface Item {
    /**
     * The name of this item.
     */
    name: string;
    /**
     * The price that the shop will buy this item for from the player.
     */
    sellPrice: (number | GoldAmount);
    /**
     * The price that the player will pay the shop for this item.
     */
    buyPrice: (number | GoldAmount);
    /**
     * Any other properties you wish.
     */
    [property: string]: any;
}
