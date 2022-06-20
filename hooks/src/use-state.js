import React, { useState } from 'react';

const HookSwitcher = () => {

    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState(14);
  
    return (
      <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
        <p>Hello world!</p>
        <button onClick={() => setColor('white')}>White</button>
        <button onClick={() => setColor('black')}>Black</button>
        <button onClick={() => setFontSize((s) => s + 1)}>+size</button>
      </div>
    );
  }

  export default HookSwitcher;