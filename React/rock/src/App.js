import logo from './logo.svg';
import './App.css';
import Box from './component/Box';

function App() {
  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>

      <div className="btn-list">
        <button type='button'>가위</button>
        <button type='button'>바위</button>
        <button type='button'>보</button>
      </div>
    </div>
  );
}

export default App;
