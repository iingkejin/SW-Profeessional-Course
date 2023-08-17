let now = new Date();
let hr = now.getHours();

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
  // if(hr >= 10) {
  //   hnum = hr;
  // } else {
  //   // 그렇지 않을 때 (한자리 수)
  //   hnum = '0' + hr;
  // } 

  // if(min >= 10) {
  //   mnum = min;
  // } else {
  //   mnum = '0' + min;
  // }

  // if(sec >= 10) {
  //   snum = sec;
  // } else {
  //   snum = '0' + sec;
  // }

  // document.querySelector('.phone-time').innerHTML = `${hnum} : ${mnum} : ${snum}`;

  // 2. padStart() method
  // 값.padStart(자리수, 채울 문자)
  // 현재 문자열의 length가 자리수 보다 작을 경우
  // 채울 문자에 작성된 문자로 자리수 만큼 채워주는 method
  // String(숫자) -> 숫자를 문자로 형변환
  hr = String(hr).padStart(2, '0');
  min = String(min).padStart(2 , '0');
  sec = String(sec).padStart(2, '0');

  document.querySelector('.phone-time').innerHTML = hr + ':' + min + ':' + sec;
}, 1000)


// 시간에 맞춰서 배경 이미지, 버튼 활성화
// 1. 06-11 까지 **morning** background-image
// 2. 12-15 까지 **afternoon** background-image
// 3. 16-19 까지 **evening** background-image
// 4. 20~ **night** background-image
let btnList = document.querySelectorAll('.btn-list li');
let back = document.querySelector('#wrapper');

if(hr >= 6 && hr < 12) {
  back.classList.add('morning');
  btnList[0].classList.add('on');
} else if(hr >= 12 && hr < 16) {
  back.classList.add('afternoon');
  btnList[1].classList.add('on');
} else if(hr >= 16 && hr < 20) {
  back.classList.add('evening');
  btnList[2].classList.add('on');
} else {
  back.classList.add('night');
  btnList[3].classList.add('on');
}


// 버튼 클릭시 배경 이미지 변경, on class add & remove
btnList.forEach(function(item){
  // 각 li a 태그의 html text를 backTxt 변수에 저장
  let backTxt = item.querySelector('a').innerHTML;
  
  // 각 버튼에 클릭 이벤트 추가
  item.addEventListener('click', function(e){
    // a 태그 링크 이동하는 것 막기
    e.preventDefault();

    // 모든 요소에 on class remove
    btnList.forEach(function(btn){
      btn.classList.remove('on');
    })

    // 현재 클릭된 요소에 on class add
    item.classList.add('on');
    // Element.className = 'class name';
    // 기존에 class가 없으면 add, 
    // 있다면 기존 것을 우측 class name으로 변경
    back.className = backTxt;
  })
})