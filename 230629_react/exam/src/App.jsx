import './App.css'

function Button(props){
  return(
    <button style={{color:props.color}}>{props.name}</button>
  )
}

function App() { 
  return (    
    <>      
      <h1>안녕하세요</h1>  
      <p>리액트 입문</p>   
      <Button name="1번버튼" color="red"/>
      <Button name="2번버튼" color="green"/>
      <Button name="3번버튼" color="gray"/>
    </>
  )
}

export default App
