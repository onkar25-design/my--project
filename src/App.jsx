import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>Color Changer</h1>
      <input 
        type="color" 
        onChange={handleColorChange} 
        value={color} 
      />
    </div>
  );
}

export default App;