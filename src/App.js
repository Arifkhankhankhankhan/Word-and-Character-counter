import React, { useState } from 'react';
import './App.css';

function App()  {
  const [text, setText] = useState('');
  const maxLength = 50;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Character Counter</h1>
      </div>
      <div className="text">
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          placeholder="Enter your text here"
          value={text}
          onChange={handleChange}
          disabled={text.length >= maxLength}
        ></textarea>
      </div>
      <div className="count">
        <p className="total_character">
          Total characters: <span id="total_char">{text.length}</span>
        </p>
        <p className="remaining_character">
          Remaining characters: <span id="remaining_char">{maxLength - text.length}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
