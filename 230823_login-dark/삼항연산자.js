// 삼항연산자 : 리액트에서 많이 사용
let person = {
  name : 'john',
  age : 21
}

// person이라는게 있다면
// console.log에 john, 없으면 '없다'
// if(person) {
//   // if 조건이 true일 때 실행
//   console.log(person.name);
// } else {
//   console.log('없다');
// }

// console.log(person ? person.name : '없다');


// age가 18살 이상이라면 '성인' 아니라면 '미성년자'
// if - else
// if(person.age >= 18) {
//   console.log('성인');
// } else {
//   console.log('미성년자');
// }

console.log(person.age >= 18 ? '성인' : '미성년자');
