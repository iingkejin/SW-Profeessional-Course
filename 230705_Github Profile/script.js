// dropdown-btn을 클릭 했을 때 dropdown-menu한테 active class 추가
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class remove
// toggle

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function(e){
  e.preventDefault();
  // dropdownMenu.classList.toggle('active');

  // 조건문으로 toggle 기능 구현
  // (소괄호)안에 있는 조건이 True(참)일시 중괄호 안에 있는 코드 실행
  // 조건이 False일 경우, else 구문 실행

  // active로 현재 버튼의 활성화 상태를 확인
  // 활성화 상태라면 True니까 if 중괄호 코드 실행 
  // 활성화 상태가 아니라면 False니까 else 구문 실행
  if(this.active) {
    // active 상태가 활성화 되어 있다면 -> .active remove
    dropdownMenu.classList.remove('active');
  } else {
    // active가 비 활성화 되어 있다면 -> .active add
    dropdownMenu.classList.add('active');
  }

  // NOT 연산자 !
  // 버튼이 비활성화 상태라면 활성 상태로
  // 활성 상태 -> 비활성화 상태
  // this.active : 현재 버튼의 활성 상태
  // !this.active : 현재 버튼 활성 상태의 반대 값
  this.active = !this.active
})
