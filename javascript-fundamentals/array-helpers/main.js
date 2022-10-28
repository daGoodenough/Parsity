//forEach

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callback(element);
  }
};

// var users = [
//   { id: 15, name: 'Bob' },
//   { id: 23, name: 'Jimbo' },
//   { id: 35, name: 'Cathy' }
// ];

// users.myForEach((user) => {
//   console.log(user.name)
// })

//map

Array.prototype.myMap = function (callback) {
  let mapped = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    mapped.push(callback(element));
  }

  return mapped;
};

// var users = [
//   { id: 15, name: 'Bob' },
//   { id: 23, name: 'Jimbo' },
//   { id: 35, name: 'Cathy' }
// ];

// let names = users.myMap((u) => {
//   return u.name;
// })

// console.log(names)

// var budgets = [
//   { title: "Rent", amount: 1200 },
//   { title: "Groceries", amount: 300 },
//   { title: "Phone", amount: 50 },
//   { title: "Gas", amount: 200 },
//   { title: "Internet", amount: 45 },
// ];

// let reformatted = budgets.myMap((item) => {
//   return `${item.title} (${item.amount})`
// })

// console.log(reformatted)

//find

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element)) {
      return element;
    }
  }
};

// var users = [
//   { id: 1, username: "Susan19", admin: false },
//   { id: 2, username: "Antonio10", admin: false },
//   { id: 3, username: "Fred15", admin: true },
//   { id: 4, username: "Tim43", admin: false },
//   { id: 5, username: "JimBob59", admin: true },
//   { id: 6, username: "Clark6", admin: false },
//   { id: 7, username: "Jameson35", admin: true },
//   { id: 8, username: "Jessica40", admin: false },
//   { id: 9, username: "Jaleesa13", admin: false },
//   { id: 10, username: "Yoni45", admin: false },
// ];

// let jim = users.myFind((u) => {
//   return u.username === 'JimBob59'
// })

// console.log(jim)

// var shoes = [
//   { name: "Nike", price: 200 },
//   { name: "Red Wings", price: 250 },
//   { name: "Vans", price: 150 },
//   { name: "Converse", price: 160 },
//   { name: "Reebok", price: 130 },
//   { name: "New Balance", price: 175 },
//   { name: "Adidas", price: 95 },
//   { name: "Keds", price: 140 },
//   { name: "Crocs", price: 135 },
// ];

//find which has a price less than 100

// let cheap = shoes.myFind((shoe) => {
//   return shoe.price < 100;
// })

// console.log(cheap)

// var findWhere = function (array, criteria) {
//   let found = array.myFind((element) => {
//     let criteriaKeys = Object.keys(criteria)[0];
//     if(element[criteriaKeys] === criteria[criteriaKeys]){
//       return true;
//     }
//   });
//   return found;
// };

// var myShoe = findWhere(shoes, { price: 95 }); // result { name: 'Adidas', price: 95 }
// console.log(myShoe)

// //every

// Array.prototype.myEvery = function (callback) {
//   let boolean = null
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     if(!callback(element)) {
//       boolean = false;
//     } else {
//       boolean = true;
//     }
//   }

//   return boolean;
// }

// //some

// Array.prototype.mySome = function (callback) {

//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     if(callback(element)){
//       return true;
//     }
//   }

//   return false;
// }

// var shoes = [
//   { name: 'Nike', price: 200 },
//   { name: 'Red Wings', price: 250 },
//   { name: 'Vans', price: 50 },
//   { name: 'Converse', price: 60 },
//   { name: 'Reebok', price: 130 },
//   { name: 'New Balance', price: 75 },
//   { name: 'Adidas', price: 95 },
//   { name: 'Keds', price: 40 },
//   { name: 'Crocs', price: 35 }
// ];

// let everyLessThan35 = shoes.myEvery((shoe) => {
//   return shoe.price < 500;
// })

// console.log(everyLessThan35)

// let someLessThan75 = shoes.mySome((shoe) => {
//   return shoe.price < 83;
// })

// console.log("Some: " + someLessThan75)

//filter

// Array.prototype.myFilter = function (callback) {
//   let filtered = [];

//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     if(callback(element)) {
//       filtered.push(element);
//     }
//   }

//   return filtered;
// }

// var posts = [
//   {
//     text: "cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea",
//     platform: "twitter",
//   },
//   {
//     text: "egestas erat imperdiet sed euismod Mark Zuckerberg Sucks!",
//     platform: "facebook",
//   },
//   { text: "egestas erat imperdiet sed euismod", platform: "myspace" },
//   { text: "risus viverra adipiscing at in", platform: "facebook" },
//   { text: "ullamcorper eget nulla facilisi etiam", platform: "instagram" },
//   { text: "feugiat pretium nibh ipsum consequat", platform: "twitter" },
//   { text: "sit amet mattis vulputate enim", platform: "facebook" },
// ];

// let tweets = posts.myFilter((post) => {
//   return post.platform === 'twitter'
// })

// let acceptablePosts = posts.filter((post) => {
//   if(post.platform === 'twitter'){
//     return post.text.length < 280
//   }

//   if(post.platform === 'instagram' || post.platform === 'facebook'){
//     return !post.text.includes("Mark Zuckerberg")
//   }

//   return false;
// })

// console.log(acceptablePosts)

// //filter out items

// var shoes = [
//   { name: "Nike", price: 200 },
//   { name: "Red Wings", price: 250 },
//   { name: "Vans", price: 50 },
//   { name: "Converse", price: 60 },
//   { name: "Reebok", price: 130 },
//   { name: "New Balance", price: 75 },
//   { name: "Adidas", price: 95 },
//   { name: "Keds", price: 40 },
//   { name: "Crocs", price: 35 },
// ];

// var filterOut = function (array, iteratorFunction) {
//   let filtered = array.filter((item) => {
//     return !iteratorFunction(item);

//   })
//   return filtered;
// };

// var priceRangeNot50to100 = filterOut(shoes, function (shoe) {
//   return shoe.price >= 50 && shoe.price <= 100
// });

// console.log(priceRangeNot50to100)

//reduce

Array.prototype.myReduce = function (callback, accumulator) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    accumulator = callback(accumulator, element);
  }

  return accumulator;
};

var numbers = [20, 40, 60, 80, 100];

let sum = numbers.myReduce((sum, num) => {
  return sum + num;
}, 0);

console.log(sum);

var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

// let shoeNames = shoes.myReduce((acc, shoe) => {
//   console.log(acc)
//   acc.push(shoe.name);
//   return acc;
// }, [])

// console.log(shoeNames)

// let shoeNameDistribution = shoes.reduce((acc, shoe) => {
//   debugger;
//   ["a", "e", "i", "o", "u"].forEach((vowel) => {
//     if(shoe.name.includes(vowel)) {
//       acc[vowel].push(shoe.price)
//     }

//   })
//   return acc;

// },
// {
//  a: [],
//  e: [],
//  i: [],
//  o: [],
//  u: []
// })

// let totalCost = shoes.reduce((total, shoe) => {
//   return total + shoe.price
// }, 0)

// console.log(totalCost)

// var beers = [
//   { name: '512 IPA', type: 'IPA' },
//   { name: 'Breakfast Stout', type: 'Stout' },
//   { name: 'Pernicious IPA', type: 'IPA' },
//   { name: '90 Minute IPA', type: 'IPA' },
//   { name: 'Obsidian Stout ', type: 'Stout' }
// ]

// let beerTypes = beers.reduce((types, beer) => {
//   if(types.hasOwnProperty(beer.type)){
//     types[beer.type] += 1
//   } else {
//     types[beer.type] = 1;
//   }
//   return types;
// },
// {}
// )

// console.log(beerTypes)

var numbers = [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];

function unique(array) {
  let uniqueArray = [array[0]];

  array.reduce((acc, num) => {
    debugger;
    let different = array.find((uniqueNum) => {
      if (!acc.includes(uniqueNum)) {
        return uniqueNum;
      }
    });
    if (different) {
      acc.push(different);
    }
    return acc;
  }, uniqueArray);

  return uniqueArray;
}

let uniqueNums = unique(numbers); // [1, 2, 3, 4, 5]

console.log(uniqueNums);
