// const promise = new Promise((resolve,reject) => {
//   setTimeout(() => {console.log('3초뒤')},3000)
// })

// promise.then(result => result).catch(error => console(error))

// const promise = async () => {
//   try{
//     const getData = await fetch('주소')
//     const result = await getData.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

/**
 * import / export
 */

import add from './add.js'
import multiply from './multiply.js'

// console.log(add(2))
console.log(multiply(3))
// multiply.js 
// 매개변수 number를 받아서 * 2한 값을 반환
//곱하기 함수를 파일로 만들어서 export 시키고,
// app.js 불러와서 실행하고 결과를 보세요