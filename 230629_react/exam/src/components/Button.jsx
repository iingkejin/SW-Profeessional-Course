// 위와 아래 객체는 같은 내용, 다른 표현 방법이다.
// 객체
// {
//   key: value
// }
// ---------------------
// {
//   name: name,
//   color: color,
//   size: size
// }
// ---------------------
// { name, color, size}
// ---------------------
import style from "./Button.module.css"
export default function Button({name}){
  return(
    <button className={style.button}>{name}</button>
  )
}