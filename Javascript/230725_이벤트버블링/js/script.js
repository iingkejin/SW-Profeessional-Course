// open-btn 버튼 클릭시 overlay한테 is-open class add
document.querySelector('.open-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.add('is-open');
})

// close-btn 버튼 클릭시 overlay한테 is-open class remove
document.querySelector('.close-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.remove('is-open');
})

// overlay 클릭시 overlay한테 is-open class remove
document.querySelector('.overlay').addEventListener('click', function(e){
  // 이벤트 버블링
  // e.target : 유저가 실제로 누른 요소
  // e.stopPropagation(); : 이벤트 버블링 일어나는 것을 막아준다.
  // e.preventDefalt() : 이벤트 기본동작을 막아준다. 

  // e.target(유저가 누른 요소)가 .overlay일 때만 코드 실행
  // e.stopPropagation() 잘 사용하지 않는 이유
  // 다른 개발자가 필요한 이벤트를 구현해둔 것 까지 
  // 막아버릴 수 있기 때문에 예상치 못한 에러를 발생시킬
  // 확률이 높아진다.  

  // 실제 클릭된 요소한테만 click event가 적용되도록 구현
  if(e.target == document.querySelector('.overlay')) {
    document.querySelector('.overlay').classList.remove('is-open');
  }
})