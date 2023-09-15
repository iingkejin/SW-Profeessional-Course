// Object shorthand Assignment
// ES6에서는 객체를 반환할 때 불필요한 반복을 하지 않아도 된다.
let name = 'yejin';
let age = 12;

let person = {
  name : name,
  age : age
}
console.log(person)

// 단축 표기법
// 키와 value에 들어가는 변수 이름이 같다면, 생략해도 된다.
// 키랑 벨류값이 일치할 때만 생략 가능!
let person2 = {
  name,
  age
}
console.log(person2)