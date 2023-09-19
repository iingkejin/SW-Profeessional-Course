import './App.css';
import Box from './component/Box';

function App() {
  let element = <h1>안녕!</h1>;
  // HTML 코드 return() 안에 작성 해야한다.
  // return() 안에는 무조건 하나의 태그로 시작해서
  // 하나의 태그로 끝나야 한다.(태그를 병렬로 기입 X)
  return (
    // class -> className 
    // 리액트가 Javascript class 문법으로 인식하기 때문
    <div className="App">
      {/* 태그에서 스타일 속성 지정할 때
          style={{key : value}} 형태로 작성
          // key : 스타일명 : value : '스타일 값'
          key값을 낙타표기법으로 작성한다.
          background-color -> backgroundColor
      */}
      <h1 style={{backgroundColor : 'red'}}>text!</h1>
      {/* 변수를 넣을 때 중괄호{}로 데이터 바인딩 */}
      {element}
      {/* 클로징 태그가 무조건 있어야 한다. */}
      <Box></Box>
      {/* self-closing 태그로 작성해도 무방 */}
      <Box/>
    </div>
  );
}

export default App;
