$('.open-btn').on('click', function(){
  $('.overlay').addClass('is-open');
})

$('.close-btn').on('click', function(){
  $('.overlay').removeClass('is-open');
})

$('.overlay').on('click', function(e){
  // e.target과 .overlay가 일치하면 코드 실행
  if($(e.target).is('.overlay')) {
    $('.overlay').removeClass('is-open');
  } 
  // console.log($(e.target))
  // console.log(e.target)
})

// 바닐라 JS랑 jQuery에서 e.target아 동작하는 방식이 다르다.
// JS에서 e.target은 이벤트가 발생한 요소 자체를 가르킨다.

// jQuery에서는 이벤트가 발생한 요소를 객체로 반환한다.
// jQuery에서 객체를 비교할 '=='가 아니라 .is() 메서드 사용
// $(선택요소).is(비교 할 요소)
// 값을 확인한 후 Boolean true, false를 반환한다.
// != 같지 않다 / !를 사용해서 .is() 메서드의 결과를 부정

// JS의 == 부등호는 객체의 내용이 아닌 참조를 비교하므로
// 값이 같아도 false를 반환한다.
// 객체 실제 값(데이터), 객체가 저장되어 있는 메모리 주소(참조)
// 객체를 변수에 할당하면 그 변수에는 객체 값이 아니라 메모리 주소가 저장된다.

// 스프레드 연산자 ... 
// 얕은 복사, 깊은 복사(깊을 복사를 할 때는 점 세개를 붙여야 한다.)
// 구조분해 