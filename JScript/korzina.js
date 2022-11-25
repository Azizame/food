/* const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter ]');

btnMinus.addEventListener("click", () => {

  if(parseInt(counter.innerText) > 10){
    counter.innerText = --counter.innerText;
  }


})
btnPlus.addEventListener("click", () => {
  counter.innerText = ++counter.innerText;
})
 */

const cartWrapper = document.querySelector(".cart__item-all")


window.addEventListener('click', (event) => {
  
  
  if(event.target.hasAttribute('data-cart')){
  const card = event.target.closest('.first-click-card')
  
  const productsInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.product-img').getAttribute('src'),
    title: card.querySelector('.first__title').innerText,
    price: card.querySelector('.cost').innerText,
    counter: card.querySelector('[data-counter]').innerText,
  }

  let num = 1;
  const itemInCart = cartWrapper.querySelector(`[data-id="${productsInfo.id}"]`)
  
  if(itemInCart){
    const counterElement = itemInCart.querySelector('[data-counter]')
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productsInfo.counter);
  }else{
      const cartItemHTML = 
      `
      <div class="dav__card-script" data-id="${productsInfo.id}">
      <div class="img">
        <img src="${productsInfo.imgSrc}" alt="">
      </div>
      <div class="dav__card-title">
        <div class="title">
          ${productsInfo.title}
        </div>
        <div class="dav__cost">
          <div class="index button__cost">
            <div class="minus" data-action="minus"></div>
            <div class="ten"  data-counter>${productsInfo.counter}</div>
            <div class="plus" data-action="plus">+</div>
          </div>
          <div class="cost" data-costs>${productsInfo.price}</div>
        </div>
        
      </div>
      <div class="dav__close">x</div>
    </div>
      `;
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
      
      
    
    }
    toggleCartStatus()

    calcCartPrice()
  }

})



