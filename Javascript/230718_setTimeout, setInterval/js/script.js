// n초 후에 코드 실행하는 함수 setTimeout()
setTimeout(function(){
  document.querySelector('.count').classList.add('is-active');
  clearInterval(hexBgcChange)
}, 5000)

// n초 후가 아니라 n초 마다 코드를 실행하고 싶다면 => setInterval()
// setInterval(function(){}, 5000)

// setTimeout() : n초 후에 코드를 실행하는 함수
// setInterval() : n초 마다 코드를 실행하는 함수


// Hex(16진수) 코드로 랜덤 컬러 변경
// 16진수 hex값 앞에 css에선 #을 붙여서 사용
// Math.random() : 0이상 1미만의 부동 소수점 난수를 생성
// Math.round : 소수점 이하의 값을 반올림해서 정수로 변환
// 16진수로 표현하려면 0x를 표현하고자 하는 숫자 앞에 붙인다.
// ffffff : RGB 255 255 255 (white)
// ff : 255
// toString(16) : 16진수로 변환
let hexBgcChange = setInterval(function(){
  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  document.querySelector('.count').style.backgroundColor = randomColor;
}, 1000)
