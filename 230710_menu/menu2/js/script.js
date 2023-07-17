// find() : 자식 및 하위 태그 찾을 때
// children() : 자식 요소만 찾을 때
// index / eq()

$('.main-menu li, .submenu-wrapper').hover(function(){
  // hover시 실행 할 함수
  $('.submenu-wrapper').stop().slideDown(500);
}, function(){
  // leave 됐을 때 실행 할 함수
  $('.submenu-wrapper').stop().slideUp(500);
})