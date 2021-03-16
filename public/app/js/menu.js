const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

function moveBurger(x) {
    x.classList.toggle("change");
    menu.classList.toggle('menu-mobile');
    menuList.classList.toggle('menu-list-mobile');

  };