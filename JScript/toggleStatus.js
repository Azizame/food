function toggleCartStatus(){
  console.log('toggleCartStatus')
  
  const cartWrapper = document.querySelector("[data-all]")
  const countBasket = document.querySelector('[data-count]')
  const cartEmptyBadge = document.querySelector('[data-cart-empty]')
  const cartBasket = document.querySelector('.dav__script')
  const orderForm = document.querySelector('[data-buy]')

  console.log(cartWrapper.children.length)

  countBasket.innerText = cartWrapper.children.length;


  if(cartWrapper.children.length > 0){
    cartEmptyBadge.classList.add("hide")
    cartBasket.classList.remove("hide")
  }else{
    cartEmptyBadge.classList.remove("hide")
    cartBasket.classList.add("hide")
  }
  

}