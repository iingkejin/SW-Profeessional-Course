let person = {
  name : 'Jonh',
  age : 23
}

// person이라는 객체를 복사하는 방법
// ... => 객체의 깊은 복사 (deep copy)
// 깊은 복사시 기존 객체가 그대로 복사되어서 새로운 객체가 생성된다.
// 내용은 똑같지만 객체가 두 개(서로 완전 다른 객체)
let person2 = {...person}
console.log(person)
console.log(person2)

// ...없이 얕은 복사(Shallow copy)
let person3 = person;
console.log(person3)

// 얕은 복사(Shallow copy)를 했을 경우
// 새로운 객체를 생성하는게 아니라 기존 객체의 주소값을 복사해서 
// 객체는 하나고 그 객체를 참조하는 변수가 두 개
// person3(얕은 복사)는 기존 객체를 참조할 뿐 새로운 객체가 생성된 게 아니다.

// 객체를 가르키고 있는 화살표가 동일하지 않다.
console.log(person == person2) // 깊은 복사 : 같지 않다
// 객체를 가르키고 있는 화살표가 동일하다.
console.log(person == person3) // 얕은 복사 : 같다

let num = [1,2,3,4,5]
let num2 = [...num, 6,7,8]
console.log(num2)
console.log(num == num2)

// num이랑 num2 값을 둘 다 복사한 새로운 객체 생성
let num3 = [...num, ...num2]
console.log(num3)