import './App.css'
import Button from './components/Button.jsx'

// components/Heading.jsx
// export default function Heading()
// h1 태그
// title 속성을 받아서 화면에 렌더링
// import Heading from './components/Heading.jsx'

function App() { 
  return (    
    <>      
      <Heading title="안녕하세요"/>
      <Button name="1번버튼" color="red" size="16px"/>
      <Button name="2번버튼" color="green" size="18px"/>
      <Button name="3번버튼" color="gray" size="24px"/>
      <Button name="3번버튼" color="gray" size="24px"/>
      <Button name="3번버튼" color="gray" size="24px"/>
      <Button name="3번버튼" color="gray" size="24px"/>
      <Button name="3번버튼" color="gray" size="24px"/>
    </>
  )
}

export default App
