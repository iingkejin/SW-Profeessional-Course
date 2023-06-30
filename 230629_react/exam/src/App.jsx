import './App.css'
import Flex from './components/Flex'

const images = [
  {id: 1, url:'/image1.jpg', title:'비글'},
  {id: 2, url:'/image2.jpg', title:'풍경'},
  {id: 3, url:'/image3.jpg', title:'경치'},
]
// figure 태그 밑에 H2 태그를 이용해서
// image.title 이라는 값을 이용해 출력해주세요
// 주의사항 리액트코드는, 부모로 감싸서 출력해야돼요.

function App() {   
  return (    
    <>
    <Flex>
      {images.map(image => (
        <>
        <figure className="image-wrapper" key={image.id}>
        <img className="image" src={image.url} alt={image.title}/>
        </figure>
        <h2>{image.title}</h2>
        </>
        ))}               
      </Flex>
    </>
  )
}

export default App
