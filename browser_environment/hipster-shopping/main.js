let showCart = document.querySelector('.view-cart');
let cart = document.querySelector('.shopping-cart')

showCart.addEventListener('click', () => {
  if(cart.className.indexOf('show') === -1) {
    cart.className += ' show'
  } else {
    cart.className = 'shopping-cart'
  }
})