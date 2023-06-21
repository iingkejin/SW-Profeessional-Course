const container = document.querySelector('.container')
const nav = document.querySelector('.nav')
// 자식요소들만 모아놓은 변수
const pages = container.querySelectorAll('.page')
const navItems = nav.querySelectorAll('.button')
console.log(pages[3])

// 버튼을 눌렀을때, 버튼과 같은 index값을 가진 page도
// 동일하게 active 클래스를 갖는다.

navItems.forEach((item,index) => {
  item.addEventListener('click', () => {
    // 어떤 버튼을 누르던, active를 모두 제거 
    // 아무도 active를 갖지 않는 상태
    navItems.forEach(item => item.classList.remove('active'))
    pages.forEach(item => item.classList.remove('active'))
    
    // 현재 누른 아이템에 active 추가
    item.classList.add('active')
    
    // 현재 누른 아이템과 동일한 index값을 가진 페이지에 active 추가
    pages[index].classList.add('active')
  })
})

// for(let index = 0; index < 5; index++ ){
//   console.log(index)
// }
// const char = ['a','b','c','d','e']
// char.forEach((item,index) => {
//   console.log(item + index)
// })

function func (content , element) {
  return console.log(content, element)  
}
func('con', 'ele')

const func2 = (content, element) => {
  console.log(content, element)
}
func2('con2', 'ele2')