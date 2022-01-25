import React from 'react';

const styles = {
  marginTop: '20px',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
};

const Card = ({ title, text }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div onClick={() => setVisible((p) => !p)} style={styles}>
      <h1>{title}</h1>
      {visible ? <p>{text}</p> : null}
    </div>
  );
};

export default Card;
