import React from 'react';
// import React, { useState } from 'react';

function App() {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const handleClickSquare1 = () => {
    if (color1 === 'red') {
      setColor1('blue');
    } else {
      setColor1('red');
    }
  };

  const handleClickSquare2 = () => {
    if (color2 === 'blue') {
      setColor2('red');
    } else {
      setColor2('blue');
    }
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color1,
        }}
        onClick={handleClickSquare1}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color2,
        }}
        onClick={handleClickSquare2}
      ></div>
    </div>
  );
}

export default App;

