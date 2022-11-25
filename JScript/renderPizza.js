const productsContainer = document.querySelector("#products-container");

getProducts()

async function getProducts(){
    const response = await fetch('./JScript/pizza.json');
    console.log(response);

    const productsArray = await response.json();
    console.log(productsArray)

    renderPizza(productsArray)
}



function renderPizza(array){
  array.forEach(function (item) { 
      const productsHTML = 
      `
        <div class="first first-click-card" data-id="0${item.id}">
        <div class="img">
          <img class="product-img"  src="./img/pizza/${item.imgSrc}" alt="">
        </div>
        <div class="first__title">
          ${item.title}
        </div>
        <div class="first__text">
          ${item.weight} см
        </div>
        <div class="first__end">
          <div class="cost">
            ${item.price} СОМ
          </div>
          <button class="button__cost counter-wrapper" data-action>
            <div class="minus" data-action="minus"></div>
            <div class="ten" data-counter>1</div>
            <div class="plus" data-action="plus">+</div>
          </button>
        </div>
        <div data-cart class="cards__buttoon-basket">
          <i class="uil uil-shopping-cart-alt icon__basket-buttn"></i>
          <p data-cart>в корзину</p>
        </div>
      </div>
      `;
      productsContainer.insertAdjacentHTML('beforeend', productsHTML)
  })
}