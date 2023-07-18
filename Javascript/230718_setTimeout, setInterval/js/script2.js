// 1초 마다 5라는 값을 1씩 감소시킨다. 5 4 3 2 1 
// count가 0이 됐을 때는 감소하는 걸 멈춘다

let count = 5;

let timer = setInterval(function(){
  count = count - 1;

  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  document.querySelector('.count').style.backgroundColor = randomColor;
  document.querySelector('.num').innerHTML = count;

  if(count == 0){
    clearInterval(timer);
  }
}, 1000)