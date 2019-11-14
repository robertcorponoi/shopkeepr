import Options from "../options/Options";
import GoldAmount from '../interfaces/Money';
/**
 * Sets up the correct gold type and keeps track of gold.
 */
export default class Gold {
    /**
     * A reference to the options for this shop.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * A reference to the amount of gold.
     *
     * @private
     *
     * @property {GoldAmount}
     */
    private _amount;
    /**
     * @param {Options} options A reference to the options for this shop.
     */
    constructor(options: Options);
    /**
     * Sets up the gold amount object with the structure defined in the initialization options.
     *
     * @private
     */
    private _setup;
    /**
     * Returns the amount of gold the shop has.
     *
     * @returns {number|GoldAmount} Returns the gold as a single number if there is only one type of currency or it returns the gold as an object.
     */
    amount(): (number | GoldAmount);
    /**
     * Adds gold to the total amount.
     *
     * @param {number|GoldAmount} amount The amount of gold to add to the total.
     */
    add(amount: (number | GoldAmount)): void;
    /**
     * Subtracts gold from the total amount.
     *
     * @param {GoldAmount} amount The amount of gold to subtract from the total.
     */
    subtract(amount: (number | GoldAmount)): void;
}
