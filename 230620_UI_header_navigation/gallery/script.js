// 요소를 하나만 찾을때는 querySelector()
// 클래스를 찾을 때는 .class 
// ID 값을 찾을때는 #id 
// 태그 이름으로도 찾을 수 있다.
const images = document.querySelector('.images')
// const main = document.querySelector('main')

// const items = images.querySelectorAll('.image-item')
// console.log(items)

// 배열로 만들어줌 - Array.from(배열을 만들 리스트)
const items = Array.from(images.querySelectorAll('.image-item'))
// console.log(items)

// items라는 배열을 반복문을 실행
// forEach = for문의 축약형, 배열길이 감지, index값도 알아서 증가
// 배열의 길이 100개건, 10개건 알아서 길이에 맞게 반복.
items.forEach((item) => {
  // 배열 요소중에 사용자 어떤걸 클릭했는지 알아서 감지
  item.addEventListener('click', () => {
    // 만약에 현재 클릭한 요소에 active있다면
    // classList.contains() 메소드는 현재 해당 class를 보유있는지 판단 - true / false
    const hasClassActive = item.classList.contains('active') // true / false
    
    if(hasClassActive){
      // active class 제거
      item.classList.remove('active')
    } else {
      // active가 없는 요소를 클릭했을 경우
      // 모든 아이템에서 active 클래스 제거
      items.forEach(item => item.classList.remove('active'))
      // 해당 아이템에 active 부여
      item.classList.add('active')
    }
  })
})

// classList

// 무언가 있는지 판단
// classList.contains()

// class 더할때는
// classList.add()

// class 제거할때는
// classList.remove()

// class를 toggle 할때
// classList.toggle()





