const sidebarMenuButton = $('.gnb-icon-button');
const sidebar = $('.sidebar');
const sidebarOverlay = $('.overlay');

function openSidebar(){
  sidebar.addClass('is-active');
  sidebarOverlay.addClass('is-active')
}

sidebarMenuButton.on('click', openSidebar)

function closeSidebar() {
  sidebar.removeClass('is-active')
  sidebarOverlay.removeClass('is-active')
}

sidebarOverlay.on('click', closeSidebar)