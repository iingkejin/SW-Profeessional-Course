const wrapper = document.getElementById('wrapper')
// global 변수 , 전역변수 - 스크립트 전체 영역 쓴다는 의미.
let count = 0;

const addSnow = () => {
  let size = Math.random() * (3 - 1) + 1 + 'px'
  let blur = Math.random() * (3 - 1) + 1 + 'px'
  // 1. createElement로 span태그 생성
  const span = document.createElement('span')
  // 2. span에 snow라는 클래스를 삽입
  span.classList.add('snow')
  
  // 최대값과 최소값 사이의 수를 랜덤으로 생성하는 공식
  // mdn Math.random()
  // Math.random() * (최대값 - 최소값) + 최소값
  span.style.left = Math.random() * (window.innerWidth - 1) + 1 + 'px'
  span.style.width = size
  span.style.height = size
  span.style.opacity = Math.random();
  span.style.filter = `blur(${blur})`
  
  // 3. wrapper에 삽입 - appendChild
  wrapper.appendChild(span)

  if(count < 100){
    count++
    window.requestAnimationFrame(addSnow)
  }

}

window.requestAnimationFrame(addSnow)

