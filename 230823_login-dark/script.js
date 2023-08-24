// 화살표 함수 (arrow function)
// 함수 선언식 보다 간결하게 사용할 수 있다.
// function name(x, y){
//   return x + y;
// }
// x, y => x + y;
let btnLog = document.querySelector('.btn-login');
let darkToggle = document.getElementById('darkmode-toggle');

document.querySelectorAll('.animate-input').forEach((e) => {
  // e : .animate-input class가진 값을 하나씩 떼서 넘겨준 값
  let input = e.querySelector('input');
  let button = e.querySelector('button');

  // onkeyup
  // 사용자가 키보드 키를 눌렀다가 떼었을 때 발생하는 이벤트
  // trim() : 공백을 제거하는 함수

  // 공백을 제거한 input.value.length가 0보다 클 때 (= 입력된 값이 있다)
  // .animate-input에 active class를 추가해서 span이 위로 올라가게 한다.
  // .btn-login에 disabled 라는 속성을 remove

  // else
  // .animate-input 에 active class remove span 원래 자리
  // btnLog disabled 속성 add => setAttribute
  input.onkeyup = () => {
    if(input.value.trim().length > 0) {
      e.classList.add('active');
      btnLog.removeAttribute('disabled');
    } else {
      e.classList.remove('active');
      btnLog.setAttribute('disabled', 'true');
    }
  }

  // 비밀번호 표시 / 숨기기
  // 비밀번호 표시 클릭 했을 때 => 숨기기 input type="text"
  // 비밀번호 숨기기 클릭 했을 때 => 표시 input type="password"
  // getAttribute input type 속성을 가져온다.
  if(button) {
    button.onclick = () => {
      if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        button.innerHTML = '비밀번호 표시';
      } else {
        input.setAttribute('type', 'text');
        button.innerHTML = '비밀번호 숨기기';
      }
    }
  } 
})


// darkmode toggle
// darkToggle 클릭 했을 때 
// 텍스트 변경 : Darkmode -> Lightmode
// body에 .dark class add

darkToggle.onclick = (e) => {
  e.preventDefault();
  let body = document.querySelector('body');
  body.classList.toggle('dark');

  // 삼항 연산자
  // 조건 ? 참일 때 실행 할 코드(true) : 거짓일 때(false)
  darkToggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
}
