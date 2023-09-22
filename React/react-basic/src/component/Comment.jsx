import React from 'react';
let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
  },
}

const Comment = () => {
  return (
    <div style={styles.wrapper}>
      <div >
        <img src="https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png" alt="" />
      </div>

      <div>
        <h3>User name</h3>
        <p>Content</p>
      </div>
      <button type='button'>X</button>
    </div>
  );
};

export default Comment;