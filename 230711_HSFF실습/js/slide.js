let buttons = document.querySelectorAll('.slide-btn li');
let slideList = document.querySelector('.slide-list');

// buttons라는 배열(li * 3)을 forEach로 반복한다.
// forEach 매개변수 1. 반복한 값, 2. 인덱스 값
buttons.forEach(function(button, index){
  // 실행 될 코드
  button.addEventListener('click',function(){
    // 0,1,2(index) * 100 => 0, -100, -200
    // 두번째 이미지 : -1 * 100 + 'vw' => -100vw
    let translateValue = -index * 100 + 'vw';
    // translateX(-100vw)
    // slideList.style.transform = 'translateX(' + translateValue + ')';
    slideList.style.transform = `translateX(${translateValue})`;

    
  })
})