export default function Flex({children}){
  return(
    <div style={{display:"flex",flexDirection:"column"}}>
      {children}      
    </div>
  )
}