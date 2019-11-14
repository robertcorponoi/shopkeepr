# Getting Started

Welcome to Shopkeepr! This getting started guide will take you through a couple different ways to set up and run a shop using Shopkeepr.

## **Initialization**

To create a new shop, we need to give it a name and if we want, some optional parameters:

```js
// Basic setup
const shop = new Shopkeepr('General Store');
```

The above will create a new shop with the name of 'General Store'. This will use the default currency and startingMoney options which we will go over next.

Shops in Shopkeepr support a flexible currency system. If you don't specify a currency system then the default one of just a single currency (gold) will be used and the shop will be initialized with 100 gold by default.

To specify a custom currency system, such as say a three tiered currency system, you can specify it like so:

```js
const options = {
  currency: ['gold', 'silver', 'copper'],
  startingMoney: [1, 5, 7]
};

const shop = new Shopkeepr('General Store', options);
```

In regards to currency and startingMoney, they are both defined as arrays and they should have the same length. For example, if you set a three tier currency system using `['gold', 'silver', 'copper']` you should set the startingMoney in the same order. So if you wanted to have 1 gold, 5 silver, and 10 copper you would set startingMoney to `[1, 5, 7]`.

## **Items**

Items are just objects that represent an item in the shop. An item can have any properties you wish (description, stats, etc) but at the very least it must have the following properties: name, sellPrice, and buyPrice. The name is the unique name of the item, sellPrice is the amount of money it costs to buy the item from the store and buyPrice is the amount of money the shop will offer for the item. If you get confused by the two, just remember that it's from the store's point of view, so to the store selling means sell to the player and buy means buying from the player.

Defining an item with a single currency system:

```js
const bucket = {
  name: 'bucket',
  sellPrice: 5,
  buyPrice: 4,
  description: 'It holds things duh',
};
```

Defining an item with a multiple currency system:

```js
const bucket = {
  name: 'bucket',
  sellPrice: { gold: 0, silver: 0, copper: 5 },
  buyPrice: { gold: 0, silver: 0, copper: 4 },
  description: 'It holds things duh',
};
```

Ok we're almost done talking about items, there's just one more thing you have to know; filters.

Adding a filter property to an item allows you to search for items with one or more filters and retrieve them specifically. This can be useful if you have a GUI for your shop that has different tabs (weapons, armor, etc.) and so you can filter items by those and return those specifically.

Adding an item with filters:

```js
const bucket = {
  name: 'bucket',
  sellPrice: 5,
  buyPrice: 4,
  description: 'It holds things duh',
  filters: ['utilities', 'non-essential']
};
```

## **Inventory**

Now we get to the heart and soul of the shop, the inventory. The inventory allows you to store items that the supposed is able to sell and can be accessed by `shopkeepr.inventory`.

If you want to add one of the above items to the inventory, you can do like:

```js
const bucket = {
  name: 'bucket',
  sellPrice: 5,
  buyPrice: 4,
  description: 'It holds things duh',
  filters: ['utilities', 'non-essential']
};

shopkeepr.inventory.addItem(bucket);
```

Then later on you can retrieve it by its name like so:

```js
const bucket = shopkeepr.inventory.getItem('bucket');
```

Now if you're using the filters to add items, you can get all items that meet one or more filters like so:

```js
const manaRing = { 
  name: 'ring of mana', 
  sellPrice: 5, 
  buyPrice: 4, 
  filters: ['mana', 'ring'] 
};

const manaPotion = { 
  name: 'mana potion', 
  sellPrice: 5, 
  buyPrice: 4, 
  filters: ['mana', 'potion'] 
};

const healthPotion = { 
  name: 'health potion', 
  sellPrice: 5, 
  buyPrice: 4, 
  filters: ['health', 'potion'] 
};

shopkeepr.inventory.addItem(manaRing);
shopkeepr.inventory.addItem(manaPotion);
shopkeepr.inventory.addItem(healthPotion);

const myPotions = shopkeepr.inventory.getItems(['potion']); // Returns an array containing the mana and health potions.
```

## **Selling/Buying Items**

Now to the fun part of a shop, buying and selling items!

To sell an item from the shop, you must first get it from the inventory:

```js
const bucket = shopkeepr.inventory.getItem('bucket');
```

and then you can sell it like so:

```js
shopkeepr.sell(bucket);
```

and what this will do is get rid of the item from the shop's inventory and then add the sell gold to the shops wallet.

and then to have the shop buy an item you just use `buy` instead:

```js
shopkeepr.buy(bucket);
```