// 변수명이 길더라도 명시적으로 적어주는 게 좋음
// var, let, const

const sidebarMenuButton = document.querySelector('.gnb-icon-button')

const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

// 함수 만드는 방법
// 긴 코드를 짧은 단어로 축약할 수 있는 문법 => function(함수)
// function 함수이름(매개변수){

// }
function openSidebar() {
  // 이 클래스가 있을 때 화면이 어떻게 보일건지 css로 먼저 작성
  // 자바스크립트로 클래스를 toggle(없으면 추가, 있으면 제거)
  // 클래스 탈부착 형식
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
