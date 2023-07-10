let buttons = document.querySelectorAll('.btn-group button');

buttons.forEach(function(btn, index){
  btn.addEventListener('click', function(){
    let slideList = document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
    
    // buttons라는 배열을 한 번 더 돌면서 모든 버튼이
    // 가지고 있는 active class remove
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active')
    })
    // 클릭된 버튼에만 active class add
    btn.classList.add('active');
  })
})