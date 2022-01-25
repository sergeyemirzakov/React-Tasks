import React from 'react';

const styles = {
  marginTop: '20px',
  display: 'inline-flex',
  padding: '10px',
  backgroundColor: 'deeppink',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const Paragraph = ({ paragraph, max }) => {
  const [visible, setVisible] = React.useState(false);

  const onBtnHandler = () => {
    setVisible((prev) => !prev);
  };

  const articleTxt = !visible
    ? paragraph.slice(0, max) + '...'
    : paragraph.slice(1);

  return (
    <>
      <h1>The component Paragraph was rendered</h1>
      <p>{articleTxt}</p>
      {!visible ? (
        <button onClick={onBtnHandler} style={styles}>
          Read more
        </button>
      ) : (
        <button onClick={onBtnHandler} style={styles}>
          Hidden Text
        </button>
      )}
    </>
  );
};

export default Paragraph;
