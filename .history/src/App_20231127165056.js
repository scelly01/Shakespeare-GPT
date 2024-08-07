import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('mytext.txt')
      .then((response) => response.text())
      .then((data) => {
        setText(data);
      })
      .catch((error) => {
        console.error('Error reading the text file:', error);
      });
  }, []);

  const firstHalf = text.slice(0, text.length / 2.2);
  const secondHalf = text.slice(text.length / 1.8, text.length-1);

  const preStyle = {
    whiteSpace: 'pre-wrap'
  };

  return (
    <div className='app'>
      <div className="heading">
          <div className='title'>Shakespeare GPT</div>
          <div className='names'>
            <div className='n1'>Sparsh Celly <br/> <sub>20103102</sub></div>
            <div className='n2'>Kriti Singh <br/> <sub>20803008</sub> </div>
            <div className='n3'>Akshit Gupta <br/> <sub>20103337</sub> </div>
          </div>
      </div>
      <div className="text">
          <div className="left">
            <pre style={preStyle}>{firstHalf}</pre>
          </div>
          <div className="right">
            <pre style={preStyle}>{secondHalf}</pre>
          </div>
      </div>
    </div>
  );
}

export default App;
