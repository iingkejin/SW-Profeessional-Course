// jQuery
// $('.gnb-main-item').hover(function(){
//   // gnb-main-item에 hover했을 때,
//   // .sub class를 찾아서 slideDown()
//   $(this).find('.sub').stop().slideDown(300);
//   $(this).children('a').addClass('active');
// }, function(){
//   $(this).find('.sub').stop().slideUp(300);
//   $(this).children('a').removeClass('active');
// })


// Vanilla JS
let gnbItems = document.querySelectorAll('.gnb-main-item');

gnbItems.forEach(function(item){
  let subMenu = item.querySelector('.sub');

  item.addEventListener('mouseover', function(){
    subMenu.classList.add('active');
  })
})