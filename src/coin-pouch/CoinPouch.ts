'use strict'

import Options from "../options/Options"
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
  private _options: Options;

  /**
   * A reference to the money this shop has.
   * 
   * @private
   * 
   * @property {Money}
   */
  private _amount: Money = {};

  /**
   * @param {Options} options A reference to the options for this shop.
   */
  constructor(options: Options) {

    this._options = options;

    this._setup();

  }

  /**
   * Sets up the gold amount object with the structure defined in the initialization options.
   * 
   * @private
   */
  private _setup() {

    for (let i = 0; i < this._options.currency.length; ++i) {

      const name: string = this._options.currency[i];

      const amount: number = this._options.startingMoney[i] || 0;

      this._amount[name] = amount;

    }

  }

  /**
   * Returns the amount of gold the shop has.
   * 
   * @returns {number|Money} Returns the gold as a single number if there is only one type of currency or it returns the gold as an object.
   */
  amount(): (number | Money) {

    if (Object.keys(this._amount).length === 1) return this._amount[Object.keys(this._amount)[0]];

    return this._amount;

  }

  /**
   * Adds gold to the total amount.
   * 
   * @param {number|Money} amount The amount of gold to add to the total.
   */
  add(amount: (number | Money)) {

    if (typeof amount === 'number') this._amount[Object.keys(this._amount)[0]] += amount;

    else {

      for (const currency in amount) {

        const gold: number = amount[currency];

        this._amount[currency] += gold;

      }

    }

  }

  /**
   * Subtracts gold from the total amount.
   * 
   * @param {Money} amount The amount of gold to subtract from the total.
   */
  subtract(amount: (number | Money)) {

    if (typeof amount === 'number') this._amount[Object.keys(this._amount)[0]] -= amount;

    else {

      for (const currency in amount) {

        const gold: number = amount[currency];

        this._amount[currency] -= gold;

      }

    }

  }

};