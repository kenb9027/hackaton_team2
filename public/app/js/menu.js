
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const dropDowns = document.querySelectorAll('.dropdown');
const menuLinks = document.querySelectorAll('.menu-link');

function moveBurger(x) {
    x.classList.toggle("change");
    menu.classList.toggle('menu-mobile');
    menuList.classList.toggle('menu-list-mobile');

  };

dropDowns.forEach((dd) => {
  const ddc = dd.querySelector(".dropdown-content");

  dd.addEventListener("click", (e) => {

    e.preventDefault() ;
    ddc.classList.toggle("clickOnDropdown");
  })
})

