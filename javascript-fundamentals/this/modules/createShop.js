import {CoffeeShopFactory} from "./coffeeShopFactory.js";

function createShop(shopName, beanInventory, beanPrice, cash, drinks) {
  let newShop = CoffeeShopFactory(36, 0.5, 50, {latte: {price: 8, beansRequired: 10},
    americano:{price: 4, beansRequired: 5},
    doubleShot: {price: 6, beansRequired: 15},
    frenchPress: {price: 5, beansRequired: 8}});
  console.log(newShop)
}

export {createShop};