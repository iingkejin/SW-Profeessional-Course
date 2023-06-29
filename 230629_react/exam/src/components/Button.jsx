// 위와 아래 객체는 같은 내용, 다른 표현 방법이다.
// {
//   name: name,
//   color: color,
//   size: size
// }
// ---------------------
// { name, color, size}
// ---------------------
export default function Button({name, color, size}){
  return(
    <button style={{color:color,fontSize:size}}>{name}</button>
  )
}