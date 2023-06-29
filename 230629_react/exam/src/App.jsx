import './App.css'
// size 속성을 만들어서
// font-size도 매개변수로 받아 적용해보세요
function Button({name, color, size}){
  return(
    <button style={{color:color,fontSize:size}}>{name}</button>
  )
}

function App() { 
  return (    
    <>      
      <h1>안녕하세요</h1>  
      <p>리액트 입문</p>   
      <Button name="1번버튼" color="red" size="16px"/>
      <Button name="2번버튼" color="green" size="18px"/>
      <Button name="3번버튼" color="gray" size="24px"/>
    </>
  )
}

export default App
