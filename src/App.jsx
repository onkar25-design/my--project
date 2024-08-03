import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>Color change</h1>
      <input 
        type="color" 
        onChange={handleColorChange} 
        value={color} 
      />
    </div>
  );
}

export default App;
