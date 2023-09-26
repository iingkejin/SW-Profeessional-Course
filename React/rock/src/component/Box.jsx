import React from 'react';
import './Box.css'

const Box = (props) => {
  return (
    <div className='box-item'>
      <h1>{props.title}</h1>
      {/*
        null error 해결 방법 => 조건부 렌더링 
        null이 아닐때만 값이 렌더링 되도록 
      */}
      <h2>{props.select && props.select.name}</h2>
      <img src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg" alt="바위 이미지" />
      <h2>win</h2>
    </div>
  );
};

export default Box;