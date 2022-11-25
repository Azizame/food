"use strict";

const openComments = document.querySelector(".comments--js")
const carousel = document.querySelector(".delete__for--js")
const comment = document.querySelector("[data-comment]")
function showMyComment(){
    openComments.classList.add("show")
    openComments.classList.remove("hide")
  comment.classList.add("active")
}
function removeMyComment(){
    carousel.classList.add("hide")
    carousel.classList.remove("show")
}
function showMyCarousel(){
  carousel.classList.remove("hide")
  carousel.classList.add("show")
  openComments.classList.add("hide")
}
comment.addEventListener("click", () => {
    removeMyComment()
    showMyComment();
    removeExit();
})


const setis = document.querySelectorAll(".seti--click");
const tabSeti = document.querySelectorAll(".seti");
const clickPerent = document.querySelector(".clickall");
function hideTabSeti(){
  tabSeti.forEach(item =>{
    item.style.display = "none"
  });
  setis.forEach(item => {
    item.classList.remove("active")
  });
};
function showtabSeti(i = 0){
  tabSeti[i].style.display = "block";
  setis[i].classList.add("active");
}
hideTabSeti();
showtabSeti();
clickPerent.addEventListener("click", (event) => {
  if(event.target && event.target.classList.contains("seti--click")){
    setis.forEach((item, i) => {
      if(event.target == item){
        hideTabSeti();
        showtabSeti(i);
        removeExit();
      }
    })
    showMyCarousel();
    
  }
})
// CARDS 


const openCards = document.querySelector(".section__products")
const deleteSection = document.querySelector(".delete__for--js")
const second = document.querySelector(".second ")
const exit = document.querySelector(".back")
function showMyCards(){
  openCards.classList.add("show")
  openCards.classList.remove("hide")

}
function removeMyCards(){
  deleteSection.classList.add("hide")
  deleteSection.classList.remove("show")
}
function removeExit(){
  openCards.classList.add("hide")
  openCards.classList.remove("show")
}
exit.addEventListener("click", () =>{
  removeExit();
  showMyCarousel();
})
second.addEventListener("click", () => {
  showMyCards()
  removeMyCards();
  
})
// MOBILE


const setisMobile = document.querySelectorAll(".seti--click--mobile");
const tabSetiMobile = document.querySelector(".mobile-click");
const clickPerentMobile = document.querySelector(".seti--first");
const removeMobileSeti = document.querySelector(".clickallmobile"),
setiD = document.querySelector(".mobile-delete");
function hideTabSetiMobile(){
  tabSetiMobile.style.display = "none"
};
function showtabSetiMobile(){
  tabSetiMobile.style.display = "flex"
}
function removeMobile(){
  removeMobileSeti.classList.add("hide")
}
function removeMobileD(){
  setiD.classList.add("hide")
}

clickPerentMobile.addEventListener("click", () => {
  showtabSetiMobile()
  removeMobile();
  removeMobileD(); 
})

hideTabSetiMobile()
const buttonClick = document.querySelector("[data-button]");
const davCard = document.querySelector(".dav__card");
const davScript = document.querySelector(".dav__script");
const davClose = document.querySelector(".dav__close")

function removeDavCard(){
  davCard.classList.add("hide");
  davCard.classList.remove("show")
}
function showDavCard(){
  davCard.classList.add("show");
  davCard.classList.remove("hide")
}
function showDavScript(){
  davScript.classList.remove("hide")
  davScript.classList.add("show")
}
buttonClick.addEventListener("click", () =>{
  removeDavCard();
  showDavScript();
})

// FOOTER CLICK

const footerMenu = document.getElementById("footer"),
  basket = document.getElementById("basket"),
  footerClose = document.getElementById("footer-close"),
  count = document.getElementById("count");

/*===== FOOTER SHOW =====*/
/* Validate if constant exists */
if(basket){
  basket.addEventListener("click", () => {
    footerMenu.classList.add("show-menu")
    basket.classList.add("basket-show")
    count.classList.add("count-show")
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(footerClose){
  footerClose.addEventListener("click", () =>{
    footerMenu.classList.remove("show-menu")
    basket.classList.remove("basket-show")
    count.classList.remove("count-show")
  })
}

// BASKET 

window.addEventListener("click", (event) => {

  let counter;

  if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
      const counterWrapper =  event.target.closest('.button__cost')
      counter =  counterWrapper.querySelector("[data-counter]");
    }

    if(event.target.dataset.action === 'plus'){
    counter.innerText = ++counter.innerText;
    } else if(event.target.closest('.dav__close')){
      console.log("in cart")
      event.target.closest('.dav__card-script').remove();
      toggleCartStatus();
    }


    if(event.target.dataset.action === 'minus'){

      if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;

      }else if(event.target.closest('.dav__card-script') && parseInt(counter.innerText) === 1){

        console.log("in cart")
        event.target.closest('.dav__card-script').remove();
        toggleCartStatus()
        calcCartPrice()
      }
      
  }

  if(event.target.hasAttribute('data-action') && event.target.closest('.cart__item-all')){
    calcCartPrice()
  }
})
