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

const Comment = () => {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.img} src="https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png" alt="" />
      </div>

      <div style={styles.contentBox}>
        <h3>User name</h3>
        <p>Content</p>
      </div>
      <button type='button'>X</button>
    </div>
  );
};

export default Comment;