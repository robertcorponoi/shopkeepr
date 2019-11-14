<h1 align="center">Shopkeepr</h1>

<p align="center">Shopkeepr makes it easy for you to add merchants/stores/shopkeepers to your JavaScript game. <p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/shopkeepr.svg?style=flat)](https://www.npmjs.com/package/shopkeepr)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/shopkeepr/badge.svg)](https://snyk.io/test/github/robertcorponoi/shopkeepr)
  [![NPM downloads](https://img.shields.io/npm/dm/shopkeepr.svg?style=flat)](https://www.npmjs.com/package/shopkeepr)
  <a href="https://badge.fury.io/js/shopkeepr"><img src="https://img.shields.io/github/issues/robertcorponoi/shopkeepr.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/shopkeepr"><img src="https://img.shields.io/github/license/robertcorponoi/shopkeepr.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Initialization](#initialization)
- [Getting Started](#getting-started)
- [API](#api)
  - [Inventory](#inventory)

## **Overview**

Shopkeepr is used to create and manage virtual shops within your JavaScript game. Support for sub-inventories, two pricing models, and sell/buy functionality make it a one stop for all shop/reward centers for your game.

Every shop in your game should be a new instance of a Shopkeepr. In every new instance of Shopkeepr, you have a main inventory and within this main inventory you can create as many unique sub-inventories as you want in order to better filter and categorize your items.

## **Installation**

To install shopkeepr you can use:

```bash
$ npm install shopkeepr
```

and then to reference in your project:

```js
// Node
const Shopkeepr = require('shopkeepr');

// Webpack
import Shopkeepr from 'shopkeepr';

// Browser Import
import shopShopkeeprkeepr from 'node_modules/shopkeepr/shopkeepr.js';
```

## **Initialization**

To create a new shop, simply create a new instance of Shopkeepr with the name of the shop.

```js
const runeShop = new Shopkeepr('Rune Shop');
```

Here are all of the initialization options available:

| param 	            | type   	  | description            	                             | default 	|
|-------------------	|---------	|----------------------------------------------------  |---------	|
| name  	            | string 	  | The name of this shop. 	                             |         	|
| options             | Object    |                                                      |          |
| options.currency    | Array     | Defines the currencies used in this shop             | ['gold'] |
| options.initialGold | Array     | The amount of gold this shop starts out with         | [100]    |

In regards to currency and startingMoney, they are both defined as arrays and they should have the same length. For example, if you set a three tier currency system using `['gold', 'silver', 'copper']` you should set the startingMoney in the same order. So if you wanted to have 1 gold, 5 silver, and 10 copper you would set startingMoney to `[1, 5, 7]`.

## **Getting Started**

If you're just interested in the API then look below but if you want a beginner friendly in-depth guide about the components of Shopkeepr checkout the [getting started guide](docs/getting-started.md).

## **API**

Below are the methods available to various parts of Shopkeepr, if any of these confuse you, you might want to check out the [getting started guide](docs/getting-started.md) first.

## **General Properties**

These properties are available to use on an instance of Shopkeepr:

### **name**

Getter that returns the name of the shop.

**example:**

```js
const shop = new Shopkeepr('General Store');

console.log(shop.name); // General Store
```

### **wallet**

Gets the money currently in the coin pouch. If using a single tier system this will return a number but if using a three tiered system this will return an object.

***example:**

```js
// Setting up a one tier system:
const options = {
  currency: ['gold']
  startingMoney: [100]
};

const shop = new Shopkeepr('General Store', options);

console.log(shop.wallet); // 100

// Setting up a three tier system:
const options = {
  currency: ['gold', 'silver', 'copper'],
  startingMoney: [1, 50, 70]
};

const shop = new Shopkeepr('General Store', options);

console.log(shop.wallet); // { gold: 1, silver: 50, copper: 70 }
```

## **Selling/Buying**

The following properties and methods are related to selling/buying from the shop and handling money.

### **sell**

Sells an item from this shop.

This removes the item from the shop's inventory and adds the cost of the item to the shop's coin pouch.

| param 	| type 	| description                       	| default 	|
|-------	|------	|-----------------------------------	|---------	|
| item  	| Item 	| The item to sell from the shop    	|         	|

**example:**

```js
shopkeepr.inventory.addItem({ name: 'mana potion', sellPrice: 5, buyPrice: 4, regen: 10 });

const potion = shopkeepr.inventory.getItem('mana potion');

shopkeepr.sell(potion);

// The shop now removes the item from its inventory and adds 5 coins to its pouch.
```

### **buy**

Buys an item from the player and adds it to the shop's inventory.

| param 	| type 	| description                       	| default 	|
|-------	|------	|-----------------------------------	|---------	|
| item  	| Item 	| The item to sell to the shop      	|         	|

**example:**

```js
const item = { name: 'mana potion', sellPrice: 5, buyPrice: 4, regen: 10 };

shopkeepr.buy(item);

// The show now adds the item to its inventory and removes 4 coins from its pouch.
```

## **Coins**

The following properties and methods are available to use with the shop's coin pouch.

## **Inventory**

The following properties and methods are available to use with the shop's inveontory.

### **addItem**

Adds an item to the inventory. Remember that items at the very least need to have a name, sellPrice, and buyPrice property. Check the [getting started guide](docs/getting-started.md) guide if you need more in-depth information about this.

| param 	| type 	| description                       	| default 	|
|-------	|------	|-----------------------------------	|---------	|
| item  	| Item 	| The item to add to the inventory. 	|         	|

**example:**

```js
const potion = { name: 'mana potion', sellPrice: 5, buyPrice: 4, regen: 10 };

shopkeepr.inventory.addItem(potion);
```

### **getItem**

Gets an item from the inventory.

| param 	| type 	  | description                       	    | default 	|
|-------	|-------	|---------------------------------------	|---------	|
| name  	| string 	| The name of the item in the inventory 	|         	|

**example:**

```js
const potion = { name: 'mana potion', sellPrice: 5, buyPrice: 4, regen: 10 };

shopkeepr.inventory.addItem(potion);

const myPotion = shopkeepr.inventory.getItem('mana potion');
```

### **getItems**

Returns one or more items that belong to one or more filters.

Using this without any arguments will return all items from the inventory.

| param 	  | type 	  | description                       	    | default 	|
|---------	|-------	|---------------------------------------	|---------	|
| filters  	| Array 	| The filters to search for 	            |          	|

**example:**

```js
const manaRing = { name: 'ring of mana', sellPrice: 5, buyPrice: 4, filters: ['mana', 'ring'] };
const manaPotion = { name: 'mana potion', sellPrice: 5, buyPrice: 4, filters: ['mana', 'potion'] };
const healthPotion = { name: 'health potion', sellPrice: 5, buyPrice: 4, filters: ['health', 'potion'] };

shopkeepr.inventory.addItem(manaRing);
shopkeepr.inventory.addItem(manaPotion);
shopkeepr.inventory.addItem(healthPotion);

const myPotion = shopkeepr.inventory.getItems(['potion']); // Returns an array containing the mana and health potions.
```

### **removeItem**

Removes an item from the inventory.

| param 	| type 	| description                           	| default 	|
|-------	|------	|---------------------------------------	|---------	|
| item  	| Item 	| The item to remove from the inventory. 	|         	|

**example:**

```js
const potion = { name: 'mana potion', sellPrice: 5, buyPrice: 4, regen: 10 };

shopkeepr.inventory.addItem(potion);

shopkeepr.inventory.removeItem(potion);
```

## **Tests**

To run the tests for Shopkeepr use:

```bash
$ npm run test
```

## **License**

MIT