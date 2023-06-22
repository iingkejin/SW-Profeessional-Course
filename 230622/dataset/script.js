const container = document.querySelectorAll('.container')

container.forEach(item => {
  
  // item => 부모, container
  // container[0], container[1], container[2]
  // 부모에서 bar를 찾고,
  const bar = item.querySelector('.bar')
  // 부모에서 number 찾고
  const number = item.querySelector('.number')
    
  // bar.data-number -> 자바스크립트는 못알아듣는다
  // bar.dataset.number -> 자바스크립트가 알아듣는다.
  // data-number의 값을 가져와서 dataNumber 할당
  const dataNumber = bar.dataset.number;
  
  // number에 숫자 변경/삽입
  number.textContent = dataNumber;
  
  // bar 그래프의 width 값으로 퍼센트 표현
  bar.style.width = dataNumber + '%'
  // console.log(bar.dataset.number)

  // index - 증가하기 위해 준비된 값
  let index = 0;
  // interval - setInterval을 담기 위한 변수
  let interval; 

  // interval에 setInterval 할당
  // setInterval은 정해진 시간마다 반복하는 메소드
  interval = setInterval(() => {
    // index + 1 씩 증가
    index++
    // dataNumber 보다 작거나 같을때까지 반복
    if(index <= dataNumber){
      // bar의 길이를 index % 할당
      bar.style.width = index + '%'
      number.textContent = index
    }   
  }, 25) // 0.025초마다 반복한다.  
})
// console.log(dataNumber)