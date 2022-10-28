function CoffeeShopFactory(beanInventory, beanPrice, cash, drinks) {
  let beans = {
    amount: beanInventory,
    price: beanPrice
  };

  let money = cash;

  let drinkRequirements = drinks;

  function getInventory() {
    if(beans.amount < 25) {
      return alert(`In inventory there are ${beans.amount} beans remaining \nWe can only make a few more drinks. Buy beans soon!`)
    } else {
      return alert(`In inventory there are ${beans.amount} beans remaining`);

    }
  }

  function getCashReserves() {
    return alert(`There are $${money} in savings. \nWe can buy ${money/beans.price} more beans`)
  }

  function buyBeans(amountBeans) {
        let moneySpent = amountBeans * beans.price;
    
        if(moneySpent > money){
          return alert("Insufficient Funds :(")
        }
    
        money -= moneySpent;
        beans.amount += amountBeans;
        console.log(beans.amount)
      }

  function makeDrink(drinkType) {
    if(!drinkRequirements.hasOwnProperty(drinkType)){
      return alert("Sorry, we do not serve " + drinkType)
    } 

    if (beans.amount < drinkRequirements[drinkType].beansRequired) {
      return alert("Sorry, out of beans.")
    } else {
      beans.amount -= drinkRequirements[drinkType].beansRequired;
      console.log("There are " + beans.amount + " remaining in inventory.")
      return alert(`Your ${drinkType} will be ready shortly :)`)
    }
  }

  function buyDrink(drinkType) {
    makeDrink(drinkType);
    money += drinkRequirements[drinkType].price;
  }

  return {
    buyDrink: buyDrink,
    getInventory: getInventory,
    getCashReserves: getCashReserves,
    buyBeans: buyBeans
  };
}

export {CoffeeShopFactory};