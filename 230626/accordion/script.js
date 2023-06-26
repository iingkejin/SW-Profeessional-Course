// 1. list 엘리먼트를 변수에 담아주세요
const list = document.querySelector('.list')
// 2. list 엘리먼트에서 자식요소 list__item 요소를 querySelectorAll()이용해서 변수로 선언
const listItem = list.querySelectorAll('.list__item')

console.log(listItem)

// listItem forEach - item 요소들을 console.log()
listItem.forEach((item) => {
  // listItem에서 요소들을 꺼내와 console.log()
  console.log(item)

  item.addEventListener('click',() => {
    // item 하나만 active class를 가질 수 있다.

    // item에 active 클래스를 추가 또는 삭제
    item.classList.toggle('active')
  })
})