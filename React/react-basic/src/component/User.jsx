import React from "react";

function User(){
  let name = 'Yejin';
  return(
    <div>
      <h1>안녕하세요, {name == 'Yejin' ? name : 'user 없음'}님!</h1>
    </div>
  )
}

export default User;