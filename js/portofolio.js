const menuItem = document.querySelector('.mobile_navbar_menu_content');
const closeMenu = document.querySelector('.mobile_close_button');
const openMenu = document.querySelector('.mobile_navbar_menu');
const menu = document.querySelector('.mobile_navbar_menu_content');

function show() {
  menuItem.classList.toggle('visible_nav_menu');
  menuItem.classList.remove('hidden');
}

function close() {
  menuItem.classList.remove('visible_nav_menu');
  menuItem.classList.toggle('hidden');
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menu.addEventListener('click', close);