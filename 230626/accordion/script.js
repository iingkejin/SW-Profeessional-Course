// 1. list 엘리먼트를 변수에 담아주세요
const list = document.querySelector('.list')
// 2. list 엘리먼트에서 자식요소 list__item 요소를 querySelectorAll()이용해서 변수로 선언
const listItem = list.querySelectorAll('.list__item')

console.log(listItem)

// listItem forEach - item 요소들을 console.log()