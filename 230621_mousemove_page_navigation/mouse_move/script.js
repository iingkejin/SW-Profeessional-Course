// app
const app = document.getElementById('app')
// console.log(pointer)

  window.addEventListener('mousemove',(event) => {
  const pointer = document.getElementById('pointer')
  // console.log('마우스 좌표X값: ' + event.clientX + '마우스 좌표 Y값:' + event.clientY)
  // console.log(`마우스 X값 : ${event.clientX}, 마우스 Y값: ${event.clientY}`)

  // pointer.style.top = event.clientY + 'px'
  // pointer.style.left = event.clientX + 'px'
  // pointer.style.top = event.clientY - (pointer.offsetHeight/ 2) + 'px'

  // event객체에서 사용자의 x값을 가져와서, 
  // pointer의 가로값(36px)을 반으로 나눈 18px을 뺀다.
  // 예) x값이 100일 경우, 100 - 18, 82px, 커서는 위치가 82px,

  pointer.style.top = `${event.clientY - (pointer.offsetHeight / 2)}px`
  pointer.style.left = `${event.clientX - (pointer.offsetWidth / 2)}px`

  // clientWidth,clientHeight의 경우에는 margin, border 사이즈를 무시한다
  // clientWidth,clientHeight는 border(1px solid white)포함 36px 사이즈를 인식하지못하고,
  // 좌우상하 1px씩 제외한 34px만 인식을 한다.
  // console.log(pointer.clientWidth)

  // offsetWidth,offsetHeight는 border 사이즈도 포함해서 가져온다. 
  // console.log(pointer.offsetWidth)
  })

  let posX; // undefined, position X
  let posY; // undefined, position Y

  // 클릭할때마다 생성
window.addEventListener('click',(event) => { 
  // createElement -> span태그 생성   
  const bubble = document.createElement('span')
  // 클릭했을때 postion 결정
  // 클릭했을때 positionX 좌표
  posX = event.clientX
  // 클릭했을때 positionY 좌표
  posY = event.clientY

  // bubble 클래스를 추가
  bubble.classList.add('bubble')
  
  // active - 애니메이션 담당하고있는 클래스
  bubble.classList.add('active')

  // 기준이 되는 부모요소에 bubble을 추가
  app.appendChild(bubble)
  
  // 클릭할때마다 bubble 요소의 좌표를 잡아준다.
  bubble.style.top = posY - (bubble.offsetHeight/2)+'px'
  bubble.style.left = posX - (bubble.offsetWidth/2)+'px'

  // 일정시간 (1000ms -> 1초)마다 bubble 삭제
  setTimeout(() => {
    bubble.remove()
  },1000)
  console.log(bubble)
})