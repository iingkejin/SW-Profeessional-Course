const app = document.getElementById('app')
const list = ['a','b','c']
// list.forEach((item, index) => {
//   // 1.p 태그 생성
//   const p = document.createElement('p')
//   // 2.p 태그 안에 item 문자열 삽입
//   p.textContent = item
//   // 3.app안에 p 삽입  
//   app.appendChild(p)
// })
// console.log(list.length)
for(let index = 0; index < list.length; index++){
  const p = document.createElement('p')
  p.textContent = list[index]
  app.appendChild(p)
}