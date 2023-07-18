// n초 후에 코드 실행하는 함수 setTimeout()
setTimeout(function(){
  document.querySelector('.count').classList.add('is-active');
  clearInterval(rgbBgcChange);
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
// let hexBgcChange = setInterval(function(){
//   let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
//   document.querySelector('.count').style.backgroundColor = randomColor;
// }, 1000)


// RGB 값으로 랜덤 컬러 변경
// 최솟값, 최댓값을 지정하고 그 사이에서 랜덤한 값(정수)을 만드는 함수
// rand라는 함수에 최소, 최대 값을 매개변수로 받는다.
// Math.random() : 0이상 1미만의 부동 소수점 난수를 생성
// Math.round : 소수점 이하의 값을 반올림해서 정수로 변환
// (max - min + 1) 최소, 최대 값 범위 내에서
// 랜덤한 값을 얻기 위한 코드
// (255 - 0 + 1) + 0 = 256
// 1을 더해주지 않으면 255미만이기 때문에 254
// (20 - 10 + 1) + 10 = 21 / 20
function rand (min, max){
  return Math.round(Math.random() * (max - min + 1) + min);
}

let rgbBgcChange = setInterval(function(){
  let r = rand(0, 255);
  let g = rand(0, 255);
  let b = rand(0, 255);
  document.querySelector('.count').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  console.log(r, g, b)
}, 1000)