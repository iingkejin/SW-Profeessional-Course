// // 1. 버튼을 변수에 담고
// // start, stop
// const start = document.getElementById('start')
// const stop = document.getElementById('stop')

// // 2. 버튼을 눌렀을때 
// // 그 안의 텍스트 내용을 console.log로 출력
// // addEventListener

// start.addEventListener('click', (e) => {
//   // console.log - 문자열 출력
//   // start
//   console.log(e.currentTarget.textContent)
// })

// stop.addEventListener('click', (e) => {
//   // console.log - 문자열 출력
//   // stop
//   console.log(e.currentTarget.textContent)
// })

// 1. title 변수 선언,
// plus , minus 버튼 변수 선언
// index 변수
const title = document.getElementById('title')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const change = document.getElementById('change')
let index = 16;

// 2. addEventListener를 각각 버튼마다 이벤트를 걸어주고,


plus.addEventListener('click', ()=>{
  // 3. plus를 눌렀을때는 1px 씩 폰트사이즈 증가
  // title.style.fontSize = `${index}px`
  index++  
  title.style.fontSize = `${index}px`
})

minus.addEventListener('click', () =>{
  // 4. minus 눌렀을때는 1px씩 폰트사이즈가 감소
  // title.style.fontSize = `${index}px`
  index--
  title.style.fontSize= `${index}px`
})

// 5.change 버튼을 눌렀을때마다 title의 컬러가 변하도록, active 클래스로 제어(추가/삭제)
 

change.addEventListener('click',() => {
  // title.classList.toggle('active')
  
  // title.classList.contains('active') / true,false
  // title.classList.add('active') - 추가
  // title.classList.remove('acitve') - 제거

  setTimeout(()=>{
    if(title.classList.contains('active')){
        title.classList.remove('active')  
        console.log('active 삭제')  
    } else { 
      title.classList.add('active')
      console.log('active 추가')  
    }
  },1000)

  // setTimeout 사용. 1초뒤에 변경
  // console.log('변경')
 })