'use strict'

/**
 * Defines the options available for an instance of Shopkeepr.
 */
export default class Options {

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
  currency: Array<string> = ['gold'];

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
  startingMoney: Array<number> = [100];

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
  tax: number = 0;

  /**
   * @param {Object} [options]
   * @param {Array<string>} [options.currency=['gold']] Defines the currencies used in your game/this shop. Any amount of currencies can be used with the highest tier first and the rest in a desccending order. Each currency is worth 100 of the currency below.
   * @param {Array<number>} [options.initialGold=[100]] The amount of gold this shop starts out with. If you are not using the default currency, you have to specify it in the same order as you did the currency option.
   */
  constructor(options: Object) {

    Object.assign(this, options);

  }

};