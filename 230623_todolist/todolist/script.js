const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list')

// add list -  리스트에 할 일들 추가하는 함수
const addList = () => {
  // 사용자가 바로 입력할 수 있도록 포커스를 input에 잡아주는 명령
  input.focus()

  // if문 - 아무것도 입력하지 않았을때 뜨는 경고창
  if(input.value.length === 0)  {
    return alert('문자를 하나라도 입력해주세요')
  } 
  // li 엘리먼트 생성
  const li = document.createElement('li')
  // 사용자가 입력한 input 값을 삽입
  li.innerHTML = `${input.value}
  <button class="list-delete">&#x2716</button>`
  // list-item 클래스 넣어줌
  li.classList.add('list-item')
  // list에 생성하고 가공한 li 내용을 담아줍니다.
  list.appendChild(li)
  // 마지막에 input 값을 비워준다.
  input.value = ''
  saveData()
}

// enter를 눌렀을때 추가
input.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    addList()
  }
})

// 추가버튼을 눌렀을때 추가
addButton.addEventListener('click',() => addList())

// update, delete
list.addEventListener('click', (e) => {
  // e.target - 클릭한 요소
  // e.currentTarget - addEventListener가 걸려있는 요소
  
  // 내용을 check/ uncheck 상태 변화
  if (e.target.tagName === 'LI') {    
      e.target.classList.toggle('checked')   
      saveData()   
  }
  // delete 버튼 - 리스트안의 자식 li 요소를 삭제
  if(e.target.tagName === 'BUTTON'){
    // 현재 누른 delete 요소의 부모(parentElement)삭제
    e.target.parentElement.remove()
    saveData()
  }  
})

const saveData = () => {
  localStorage.setItem('list', list.innerHTML)
}

const loadData = () => {
  list.innerHTML = localStorage.getItem('list')
}

loadData()

