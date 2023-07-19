// 1초 마다 5라는 값을 1씩 감소시킨다. 5 4 3 2 1 
// count가 0이 됐을 때는 감소하는 걸 멈춘다

// 5에서 count minus 기능 코드
// let count = 5;

// let timer = setInterval(function(){
//   count = count - 1;

//   let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
//   document.querySelector('.count').style.backgroundColor = randomColor;
//   document.querySelector('.num').innerHTML = count;

//   if(count == 0){
//     clearInterval(timer);
//   }
// }, 1000)


// 1부터 10까지 count plus
let plusCount = 1;

let plusTimer = setInterval(function(){
  plusCount = plusCount + 1;
  document.querySelector('.num').innerHTML = plusCount;

  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  document.querySelector('.count').style.backgroundColor = randomColor;

  // 조건문으로 count가 10이 되면
  // count plus 멈추고, 박스가 화면상에서 사라지게 한다.
  if(plusCount == 10) {
    clearInterval(plusTimer);
    document.querySelector('.count').classList.add('is-active');
  }
}, 1000)