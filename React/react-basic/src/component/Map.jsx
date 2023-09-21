import React from 'react';

// map() 함수
// 코드를 간결하고 가독성 있게 유지하는데 유용하다.
// 모든 Array(배열) 뒤에 사용할 수 있다.
const Map = () => {
  let num = [1,2,3,4,5];
  let arrPlus = num.map((num) => num + 1)
  // console.log(num)
  // console.log(arrPlus)

  // num의 제곱근
  let newArr = num.map((num) => {
    // 제곱 구하는 함수 Math.pow()
    return Math.pow(num, 2)
  })
  console.log(newArr)
  
  return (
    <div>
     {
      // map((para1, para2) => {})
      // para1 : 배열의 반복한 값
      // para2 : 배열 인덱스 번호
      [1,2,3].map((item, index) => {
        return (
          <div key={index}>
            <div>배열 안 값 : {item}</div>
            <div>배열 인덱스 : {index}</div>
          </div>
        )
      })
     }

     {
      // console.log 두 번 찍히는 이유 => React.StrictMode 때문(index.js)
      [1,2,3,4,5].map((num) => {
        // console.log(num)
      })
     }

     {
      // 배열 속 문자를 대문자로 변환한 값을 화면에 수직으로
      ['yejin', 'lee', 'jin'].map((str, index) => {
        return <div key={index}>{str.toUpperCase()}</div>
      })
     }

     {
      // 객체 속성값 추출
      [
        {name : 'yejin1', age : 101},
        {name : 'yejin2', age : 102},
        {name : 'yejin3', age : 103}
      ].map((info, index) => {
        return (
          <div key={index}>이름 : {info.name} 나이 : {info.age}</div>
        )
      })
     }

     {
      [1,2,3,4,5].map((num, index) => {
        return num + index
      })
     }
    </div>
  );
};

export default Map;