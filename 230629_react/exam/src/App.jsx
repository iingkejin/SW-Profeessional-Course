import './App.css'
import Button from './components/Button.jsx'
import Heading from './components/Heading'
import Flex from './components/Flex'

function App() { 
  return (    
    <>      
      <Flex>       
        <Heading title="안녕하세요"/>
        <Button name="1번버튼" color="red" size="16px"/>
        <Button name="2번버튼" color="green" size="18px"/>
        <Button name="3번버튼" color="gray" size="24px"/>
      </Flex>
    </>
  )
}

export default App
