import React from 'react';
import './App.css';

import textData from './text-data.json';

import Users from './components/Users';
import Paragraph from './components/Paragraph';
import Card from './components/Card';
import PicCat from './components/Pictures';
import Rating from './components/Rating';
import CustomProgressBar from './components/CustomProgressBar';

const paragraph = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a 
  type specimen book.
`;

function App() {
  const textArticle = textData;

  const [show, setShow] = React.useState(null);

  const setClass = (idx) => {
    setShow(idx);
  };

  return (
    <div className="App">
      <PicCat />
      <div className="container">
        <h1>Hello, React✋</h1>
        <Rating />
        <CustomProgressBar min={0} max={100} />
        <Users />
        <Paragraph paragraph={paragraph} max={70} />
        {textArticle.map((c) => (
          <Card
            key={c.id}
            text={c.text}
            title={c.title}
            id={c.id}
            setClass={() => setClass(c.id)}
            show={show}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
