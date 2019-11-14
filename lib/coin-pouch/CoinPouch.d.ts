import Options from "../options/Options";
import Money from '../interfaces/Money';
/**
 * Sets up the correct currency type and keeps track of moeny.
 */
export default class CoinPouch {
    /**
     * A reference to the options for this shop.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * A reference to the money this shop has.
     *
     * @private
     *
     * @property {Money}
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
     * @returns {number|Money} Returns the gold as a single number if there is only one type of currency or it returns the gold as an object.
     */
    amount(): (number | Money);
    /**
     * Adds gold to the total amount.
     *
     * @param {number|Money} amount The amount of gold to add to the total.
     */
    add(amount: (number | Money)): void;
    /**
     * Subtracts gold from the total amount.
     *
     * @param {Money} amount The amount of gold to subtract from the total.
     */
    subtract(amount: (number | Money)): void;
}
