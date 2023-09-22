import React from 'react';
let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    border : '1px solid #ccc',
    borderRadius : '16px',
    padding : '0 20px'
  },

  img : {
    width : '50px',
    height : '50px',
    borderRadius : '50%'
  },

  contentBox : {
    flexGrow : 1,
    marginLeft : '16px'
  }
}

// 부모 컴포넌트로 부터 받아온 값 바인딩 props
// props.부모가넘겨준이름
const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.img} src="https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png" alt="" />
      </div>

      <div style={styles.contentBox}>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
      <button type='button'>X</button>
    </div>
  );
};

export default Comment;