/**
 * 자바스크립트 공부하기 좋은 사이트
 * https://ko.javascript.info/
 * ---------------------------------------
 * 상수, 변수
 * 기존의 자바스크립트를 ES5 
 * ES6, ES7, ES2019... ES6 => ESNEXT
 * --------------------------------------
 */
 
// ES5, var = Variable
// var name = '철수'
// console.log(name)

// ES6, let / const
// let 변화하는 내용을 넣을때 쓰는 변수선언법
// const = constant 상수,변화하지 않는 내용을 담을때 씁니다.
let name = '철수'
name = '영희'
console.log(name)

const myName = '지우'
// myName = '피카츄'
console.log(myName)

// 함수
// ES5 
function multiply (number){
  return number * 2;
}
console.log(multiply(2))

// ES6 화살표 함수
// multiply2
const multiply2 = (number) => {
  return number * 2
}
console.log(multiply2(3))

// 화살표함수에서, 매개변수가 하나일때만 가능한 방법
const multiply3 = number => number * 2
console.log(multiply3(5))

/**
 * Class - 객체지향프로그래밍
 * ES6부터 도입된 개념
 */

class Pokemon {
  constructor() {
    this.pokemonName = '피카츄'
  }
  showPokemonName () {
    // 포켓몬 이름을 출력해주는 메소드
    console.log(this.pokemonName)
  }
}

class Trainer extends Pokemon{
  // 초기화, trainerName 기본값 = '지우'
  constructor(trainerName = '지우') {
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName () {
    console.log(this.name)
  }
}

const trainer = new Trainer('웅이')
// trainer.name = '피카츄'
trainer.showTrainerName()
trainer.showPokemonName()

/**
 * 스프레드 연산자
 * 배열에서도 쓸 수있고, 
 * 객체에서도 쓸 수 있다. 
 * ... (점 세개를 꼭 지켜주세요)
 */

const pokemons = ['피카츄', '고라파덕', '이상해씨']
const newPoke = [...pokemons, '파이리']
// pokemons.forEach(pokemon => newPoke.push(pokemon))
// newPoke.push('파이리')
console.log(newPoke)

const numbers =  [1,2,3]
// 4,5를 추가해서 newNumbers 배열을 새로 생성하세요.
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)

const pokemonTrainer = {
  name:'지우',
  pokemon:"피카츄"
}
console.log(pokemonTrainer.name)

const newTrainer = {
  ...pokemonTrainer,
  age: 20
}

console.log(newTrainer)

const char = {
  enLength: 26,
}
// char의 내용을 복사해서
// alphabet : "characters" 속성을 추가해서
const num = {
  ...char,
  alphabet: "characters"
}
console.log(num)

/**
 * rest 연산자
 * args = arguments
 */


const filterNumber = (...args) => {
  return args.filter(number => {
    if(number === 1){
      return number
    }    
  })
}

console.log(filterNumber(1,3,6,7,8))// [1]

// filterAlphabet 
// 'a','b','c','d' 이 인수들을 필터링
// 조건 : alphabet === 'a'
// 결과 : ['a']

const filterAlphabet = (...args) => {
  return args.filter(char => char === 'a')
}

console.log(filterAlphabet('a','b','c','d')) 
// ['a'] , filter 메소드는 결과를 배열로 만들어준다. 

// const pokemons = ['피카츄', '고라파덕', '이상해씨']
// 변수명 : filterPokemon
// 조건 : '피카츄"만 출력
// 결가 : ['피카츄']

const filterPokemon = (...args) => {
  return args.filter(pokemon => pokemon === '피카츄')
}

console.log(filterPokemon(...pokemons))