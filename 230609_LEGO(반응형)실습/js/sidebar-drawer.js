const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
  drawerMenu.classList.toggle('is-active');
}

drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu);
})
