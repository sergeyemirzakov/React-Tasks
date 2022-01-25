import React from 'react';
import './App.css';
import textData from './text-data.json';

import Users from './components/Users';
import Paragraph from './components/Paragraph';
import Card from './components/Card';

const paragraph = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a 
  type specimen book.
`;

function App() {
  const [show, setShow] = React.useState(false);
  const textArticle = textData;

  const onClickHandler = (e) => {
    console.log(e.target);
    setShow((p) => !p);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Hello, React✋</h1>
        {/* <Users />
        <Paragraph paragraph={paragraph} max={70} /> */}
        {textArticle.map((c) => (
          <Card
            onClickHandler={(e) => onClickHandler(e)}
            key={c.id}
            text={c.text}
            title={c.title}
            id={c.id}
            show={show}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
