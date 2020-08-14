var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/* ----------header-sidenav---------- */

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/* ----------/header-sidenav---------- */
/* ----------modal---------- */

var slose = document.querySelector("#close");
var hidden = document.querySelector (".hidden")
var headerBottom =document.querySelector (".header__top-bottom");
var topCont = document.querySelector (".top__open-contacts");
var contsFon = document.querySelector (".contacts__fon");
var contСontainer = document.querySelector (".contacts__container");

headerBottom .addEventListener("click", function(){
  if(topCont.classList.toggle("hidden")) {
    contsFon.classList.remove("show");
    
  } else {
    contsFon.classList.add("show");
    contsFon.style.display="block";
  }
})
slose.addEventListener("click", function(){
  topCont.classList.add("hidden");
})

window.onclick = function(event){
  if (event.target == contsFon) {
    contsFon.style.display = "none";
    topCont.classList.add("hidden")
  }
}
/* ----------/modal---------- */
/* ----------top-menu---------- */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "112px";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}