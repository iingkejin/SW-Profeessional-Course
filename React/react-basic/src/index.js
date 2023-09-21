import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 리액트는 예상 못한 에러를 잡기 위해 StrictMode를 제공한다.
  // 랜더링 단계에서 함수를 한 번 호출하고,
  // 후에 한 번 더 호출해서 동일한 값이 나오는지 비교한다.
  // React 개발 환경에서만 두 번 호출되고,
  // 배포 됐을 때는 상관 X
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
