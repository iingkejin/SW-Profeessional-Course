import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';

let choice = {
  rock : {
    name : 'Rock',
    img : 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg'
  },
  paper : {
    name : 'Paper', 
    img : 'https://dictionary.cambridge.org/ko/images/thumb/paper_noun_002_26402.jpg?version=5.0.305'
  },
  scissors : {
    name : 'Scissors',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZOIPMrEps54-OsxSI1J50Pr5znQx6lDaA&usqp=CAU'
  }
}

function App() {
  let [userSelect, setuserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');

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
