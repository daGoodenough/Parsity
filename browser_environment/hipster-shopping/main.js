let showCart = document.querySelector('.view-cart');
let cart = document.querySelector('.shopping-cart')

showCart.addEventListener('click', () => {
  if(cart.className.indexOf('show') === -1) {
    cart.className += ' show'
  } else {
    cart.className = 'shopping-cart'
  }
})

let products = document.querySelector('.products')

let cartArr = [];

products.addEventListener('click', (e) => {
  if(e.target.className === 'add-to-cart'){
    let itemName = e.target.closest('.item').attributes["data-name"].value;
    let itemPrice = e.target.closest('.item').attributes["data-price"].value;

    let productObj = {name: itemName, price: itemPrice};

    cartArr.push(productObj);
    updateCart(cartArr);
  }
})

function updateCart(arr) {
  let productList = document.querySelector('.cart-list');

  while(productList.hasChildNodes()){
    productList.removeChild(productList.firstChild)
  }
  let totalPrice = 0;
  
  arr.forEach((item) => {
    totalPrice += Number(item.price);
    let itemP = document.createElement('p');
    itemP.innerHTML = `${item.name} - $${item.price}`
    productList.appendChild(itemP);
  })

  document.querySelector('.total').innerHTML = totalPrice;
}

let clearBtn = document.querySelector('.clear-cart')

clearBtn.addEventListener('click', () => {
  let productList = document.querySelector('.cart-list');

  while(productList.hasChildNodes()){
    productList.removeChild(productList.firstChild)
  }

  document.querySelector('.total').innerHTML = 0;

  cartArr = [];
}) 