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
export default function Button({name,primary,secondary}){
  // 3항연산자
  const isPrimary = primary ? style.primary : ''
  const isSecondary = secondary ? style.secondary : ''
  // if(primary){
  //   return style.primary
  // } else { 
  //   return ''
  // }
  return(
    <button className={[style.button, isPrimary, isSecondary].join(" ")}>{name}</button>
  )
}