import React from 'react';

const styles = {
  marginTop: '20px',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
};

const Card = ({ title, text, onClickHandler, show }) => {
  const [visible, setVisible] = React.useState(false);

  const clickHandler = (e) => {
    setVisible(show);
    onClickHandler(e);
  };

  return (
    <div style={styles}>
      <h1 onClick={(e) => clickHandler(e)}>{title}</h1>
      {show ? <p>{text}</p> : null}
    </div>
  );
};

export default Card;
