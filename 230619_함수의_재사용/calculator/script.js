/**
 * const와 let, var 
 * 변수의 스코프 문제로 var보다는 let, const를 많이 활용하는 추세
 * 
 * const 는 상수(contant) - 변하지 않는 값들을 저장
 * let 은 변수 - 변하는 값들을 저장
 */

// var text = "text content"
// const app = document.getElementById('app')
// app.textContent = text; 

// for(let i = 0; i < 10; i++){
//   console.log(i)
//   const text = 'text';
//   console.log(text)
// }

/** 
 * 버튼을 눌렀을때, 값이 증가, 감소
 * */ 

// btnInc - Increase Button(증가버튼)
const btnInc = document.getElementById('increase')
// btnDec - Decrease Button(감소버튼)
const btnDec = document.getElementById('decrease')
// console.log(btnInc)

// number -> content
const content = document.getElementById('content')
// console.log(number)

// 초기화된 숫자값
let originNumber = 0

// btnInc 눌렀을때 숫자증가
btnInc.addEventListener('click',() => calculate(originNumber, content, true))

// btnDec 눌렀을때 숫자가 감소
btnDec.addEventListener('click',() => calculate(originNumber, content, false))

const money = 1000

// 계산함수정의
// function calculate(number, content, check) {  
const calculate = (number, content, check) => {
  //check 값을 판단 -> true : false;
  if(check === true){  
    number = number + money;    
  } else { 
    // number 0 보다 클때만 값을 감소시켜라
    if(number > 0){
      number = number - money;      
    }
  }
  // content에 변화한 매개변수(number)값 삽입(textContent)
  content.textContent = number  
  
  // originNumber 값을 매개변수(number)로 업데이트
  originNumber = number
  // console.log(originNumber)
}

// 실행
// inc(incNum)











