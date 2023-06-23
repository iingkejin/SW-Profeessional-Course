const number = document.querySelector('.number')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const list = document.getElementById('list')
let index = 0;
// 1000 milliseconds => 1 second
let timerId;

startBtn.addEventListener('click',() => {
  index = 0;
  timerId = setInterval(()=>{
    index++
    number.textContent = index;
    // console.log(index)
  },10)  
})

stopBtn.addEventListener('click',() => {
  clearInterval(timerId)
  const li = document.createElement('li')
  li.textContent = index
  list.appendChild(li)
})