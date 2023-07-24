// progress bar (프로그래스 바)
// 사용자가 현재 페이지를 얼마만큼 읽었는지 그 값을 나타내는 UI 바

// scrollTop, clientHeight, scrollHeight
// 스크롤 높이, 화면 높이값, 스크롤 값
// 스크롤바를 1% 내리면 progress bar width 1% 증가

// 1. html, css에서 bar를 어떤 위치에 어떻게 보여줄건지 디자인
// 2. window 스크롤 이벤트 추가

window.addEventListener('scroll', function(){
  let scrollTop = document.querySelector('html').scrollTop;
  let clientH = document.querySelector('html').clientHeight;
  let scrollH = document.querySelector('html').scrollHeight;
  // console.log('스크롤 양 :' +  scrollTop);
  // console.log('화면 높이 :' +  clientH);
  // console.log('스크롤 높이 :' +  scrollH);

  // 백분율 환산
  // (구하려는 백분율을 나타내는 수 / 전체 수) * 100
  let progress = (scrollTop / (scrollH - clientH)) * 100;
  console.log(progress + '%')
  document.querySelector('.line').style.width = progress + '%';
})
