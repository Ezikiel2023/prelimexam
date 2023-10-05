import React, { useState } from 'react';
import './App.css';

function CalButton({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function CalDisplay({ expression }) {
  return (
    <div className='CalDisplay'>
      {expression}
    </div>
  );
}

function App() {
  const [expression, setExpression] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        
        const result = eval(calculation);
        setExpression(result.toString());
        setCalculation(result.toString());
      } catch (error) {
        
        setExpression('Error');
        setCalculation('');
      }
    } else if (value === 'C') {
      
      setExpression('');
      setCalculation('');
    } else {
    
      setCalculation((prevCalculation) => prevCalculation + value);
      setExpression((prevExpression) => prevExpression + value);
    }
  };

 return (
  <div className='App'>
 <h1 className='Header'>Calculator of Ezikiel D. Manese IT3A</h1>
      <CalDisplay display={displayValue} />
      <div className='ButtonContainer'>
        <CalButton label={7} onClick={handleButtonClick} />
        <CalButton label={8} onClick={handleButtonClick} />
        <CalButton label={9} onClick={handleButtonClick} />
        <CalButton label="+" onClick={handleButtonClick} />
        <CalButton label={4} onClick={handleButtonClick} />
        <CalButton label={5} onClick={handleButtonClick} />
        <CalButton label={6} onClick={handleButtonClick} />
        <CalButton label="-" onClick={handleButtonClick} />
        <CalButton label={1} onClick={handleButtonClick} />
        <CalButton label={2} onClick={handleButtonClick} />
        <CalButton label={3} onClick={handleButtonClick} />
        <CalButton label="*" onClick={handleButtonClick} />
        <CalButton label="C" onClick={handleButtonClick} />
        <CalButton label={0} onClick={handleButtonClick} />
        <CalButton label="=" onClick={handleButtonClick} />
        <CalButton label="/" onClick={handleButtonClick} />
     </div>
     <div className='ButtonContainer'>
        <CalButton label="{"MANESE"} onClick={() => {}} />
     </div>
    </div>
  );
}

export default App;
