const menuItems = document.querySelectorAll('.gnb > li');

menuItems.forEach(function(item){
  const subMenu = item.querySelector('.sub');

  item.addEventListener('mouseover', function(){
    subMenu.classList.add('active');
    this.querySelector('a').classList.add('on');
  })

  // mouseleave
  item.addEventListener('mouseleave', function(){
    subMenu.classList.remove('active');
    this.querySelector('a').classList.remove('on');
  })
})