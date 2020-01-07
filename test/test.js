'use strict'

import test from 'ava';
import Shopkeepr from '../shopkeepr.js';

let shopkeepr;

test.beforeEach(() => shopkeepr = new Shopkeepr('General Store'));

test.afterEach(() => shopkeepr = null);

/**
 * Initialization
 */
test('creating a new shopkeepr with a name of `General Store`', t => {
  t.is(shopkeepr.name, 'General Store');
});

/**
 * Gold
 */
test('using the default gold system', t => {
  shopkeepr = new Shopkeepr('General Store');

  const gold = shopkeepr.wallet;

  t.is(gold, 100);
});

test('using a three tier gold system', t => {
  const options = {
    currency: ['gold', 'silver', 'copper'],
    startingMoney: [50, 90, 3]
  };

  shopkeepr = new Shopkeepr('General Store', options);

  const gold = shopkeepr.wallet;

  t.deepEqual(gold, { gold: 50, silver: 90, copper: 3 });
});

/**
 * Adding items to the inventory.
 */
test('failing when adding an invalid item', t => {
  shopkeepr = new Shopkeepr('General Store');

  const invalidItem = { sellPrice: 5 };

  t.throws(() => shopkeepr.inventory.addItem(invalidItem));
});

test('adding an item to the inventory', t => {
  const item = { name: 'potion', sellPrice: 5, buyPrice: 4 };

  shopkeepr.inventory.addItem(item);

  t.deepEqual(shopkeepr.inventory._items, [{ name: 'potion', sellPrice: 5, buyPrice: 4 }]);
});

/**
 * Getting items from the inventory.
 */
test('getting an item from the inventory', t => {
  const item = { name: 'potion', sellPrice: 5, buyPrice: 4 };

  shopkeepr.inventory.addItem(item);

  const potion = shopkeepr.inventory.getItem('potion');

  t.deepEqual(potion, item);
});

test('getting all items from the inventory', t => {
  const potion1 = { name: 'potion1', sellPrice: 5, buyPrice: 4, filters: ['health'] };
  const potion2 = { name: 'potion2', sellPrice: 5, buyPrice: 4, filters: ['health', 'mana'] };
  const potion3 = { name: 'potion3', sellPrice: 5, buyPrice: 4, filters: ['mana', 'energy'] };

  shopkeepr.inventory.addItem(potion1);
  shopkeepr.inventory.addItem(potion2);
  shopkeepr.inventory.addItem(potion3);

  const potions = shopkeepr.inventory.getItems();

  t.is(potions.length, 3);
});

test('getting items that match a single filter', t => {
  const potion1 = { name: 'potion1', sellPrice: 5, buyPrice: 4, filters: ['health'] };
  const potion2 = { name: 'potion2', sellPrice: 5, buyPrice: 4, filters: ['health', 'mana'] };
  const potion3 = { name: 'potion3', sellPrice: 5, buyPrice: 4, filters: ['mana', 'energy'] };

  shopkeepr.inventory.addItem(potion1);
  shopkeepr.inventory.addItem(potion2);
  shopkeepr.inventory.addItem(potion3);

  const potions = shopkeepr.inventory.getItems(['energy']);

  t.deepEqual(potions, [potion3]);
});

test('getting items that match multiple filters', t => {
  const potion1 = { name: 'potion1', sellPrice: 5, buyPrice: 4, filters: ['health'] };
  const potion2 = { name: 'potion2', sellPrice: 5, buyPrice: 4, filters: ['health', 'mana'] };
  const potion3 = { name: 'potion3', sellPrice: 5, buyPrice: 4, filters: ['mana', 'energy'] };

  shopkeepr.inventory.addItem(potion1);
  shopkeepr.inventory.addItem(potion2);
  shopkeepr.inventory.addItem(potion3);

  const potions = shopkeepr.inventory.getItems(['health', 'energy']);

  t.deepEqual(potions, [potion1, potion2, potion3]);
});

/**
 * Selling and buying items.
 */
test('buying an item from the shop with a one currency system should add gold to the shop', t => {
  const shopkeepr = new Shopkeepr('General Store');

  const item = { name: 'potion', sellPrice: 5, buyPrice: 4 };

  shopkeepr.inventory.addItem(item);

  shopkeepr.sell(item);

  t.is(shopkeepr.wallet, 105);
});

test('buying an item from the shop should remove the item from the shop', t => {
  const shopkeepr = new Shopkeepr('General Store');

  const item = { name: 'potion', sellPrice: 5, buyPrice: 4 };

  shopkeepr.inventory.addItem(item);

  shopkeepr.sell(item);

  t.is(shopkeepr.inventory._items.length, 0);
});

test('buying an item from the shop with a complex currency system should add gold to the shop', t => {
  const options = {
    currency: ['gold', 'silver', 'bronze'],
    startingMoney: [10, 10, 10]
  }

  const shopkeepr = new Shopkeepr('General Store', options);

  const item = { name: 'potion', sellPrice: { bronze: 5 }, buyPrice: 4 };

  shopkeepr.inventory.addItem(item);

  shopkeepr.sell(item);

  t.deepEqual(shopkeepr.wallet, { gold: 10, silver: 10, bronze: 15 });
});