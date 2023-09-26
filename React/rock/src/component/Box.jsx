import React from 'react';

// 부모 컴포넌트(App.js)에서 보낸 값 props로 받기
const Box = (props) => {
  // result라는 변수에 부모 컴포넌트에서 받은 props.result값을
  // title이 Computer일 경우 반전시켜서 서로 반대값을 가지도록 만든다.
  let result;

  // title이 Computer고, 결과가 tie가 아니고, 결과가 빈값이 아닐때
  // 여기서 result는 변수가 아니라 props.result 값을 의미
  if(
    props.title == "Computer" &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result === "win" ? "lose" : "win"
  } else {
    result = props.result;
  }

  return (
    // result 변수가 가지고 있는 win, lose, tie 값을 css 클래스 이름으로 사용
    // 각 결과에 따라 border color 지정 backtick으로 감싸서 `문자열와 ${}`변수 사용
    <div className={`box-item ${result}`}>
      <h1>{props.title}</h1>
      {/*
        *** 조건부 렌더링
        유저가 btn-list 안 버튼을 클릭 했을 때 useState 값이 변경되면서 select.name를 
        읽어야 하는데, 초기값이 null이라 값을 읽지 못하므로 Error 발생!

        ** 리액트는 컴포넌트는 UI를 렌더링 할 때, 보여주려는 값이 없다면 에러를 일으킨다.
           props.select값이 있다면 우항을 렌더링, 없다면 false를 리턴해서 렌더링이 되지 않는다.
      */}
      <h2>{props.select && props.select.name}</h2>
      <img src={props.select && props.select.img} alt={props.select && props.select.name}/>
      {/* props.result 값이 아니라 변수 result값을 바인딩 */}
      <h2>{result}</h2>
    </div>
  );
};

export default Box;