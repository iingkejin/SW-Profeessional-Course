// new Date()
// n초 마다 코드를 실행하는 setInterval
setInterval(function(){
  let now = new Date();
  // 시, 분, 초 값을 각 변수에 할당
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  
  // 1. 조건문
  // hr(시) 10보다 크거나 같을 때 (두자리 수)
  if(hr >= 10) {
    hnum = hr;
  } else {
    // 그렇지 않을 때 (한자리 수)
    hnum = '0' + hr;
  } 

  if(min >= 10) {
    mnum = min;
  } else {
    mnum = '0' + min;
  }

  if(sec >= 10) {
    snum = sec;
  } else {
    snum = '0' + sec;
  }

  document.querySelector('.phone-time').innerHTML = `${hnum} : ${mnum} : ${snum}`;

  // 2. padStart() method
}, 1000)