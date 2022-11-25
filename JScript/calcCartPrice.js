function calcCartPrice(){
  const cartItems = document.querySelectorAll(".dav__card-script")
  const costPrice = document.querySelector('[data-costs]')
  const totalPriceEl = document.querySelector('.total-price')

  let totalPrice = 0;
  let cost = costPrice.innerText;
  cartItems.forEach((item) =>{

    const amountEl = item.querySelector('[data-counter]')
    const priceEl = item.querySelector('[data-costs]')

    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
    
    totalPrice += currentPrice;
  })

  totalPriceEl.innerText = totalPrice;

}