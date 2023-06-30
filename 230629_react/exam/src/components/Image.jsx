// Image.jsx
const Image = ({url, title}) => {
  return(
    <figure className="image-wrapper">
      <img className="image" src={url} alt={title}/>
    </figure>
  )
}

export default Image