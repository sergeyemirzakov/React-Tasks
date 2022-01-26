import React from 'react';
import './Card.css';

const styles = {
  marginTop: '20px',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
};

const Card = ({ title, text, id, show, setClass }) => {
  return (
    <div onClick={setClass} style={styles}>
      <h1>{title}</h1>
      {<p className={show === id ? 'active' : 'hidden'}>{text}</p>}
    </div>
  );
};

export default Card;
