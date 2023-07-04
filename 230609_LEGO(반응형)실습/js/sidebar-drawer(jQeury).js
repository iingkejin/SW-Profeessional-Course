// drawer-menu-button(3)을 클릭 했을 때
// this(클릭된 애)의 부모 요소에게 is-open, is-active toggle

const drawerMenuButtonList = $('.drawer-menu-button');

function toggleDrawerMenu(){
  const drawerMenu = $(this).parent();
  drawerMenu.toggleClass('is-open');
  drawerMenu.toggleClass('is-active');
}

drawerMenuButtonList.on('click', toggleDrawerMenu);



