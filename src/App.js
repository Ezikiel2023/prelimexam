import React, { useState } from 'react';
import './App.css';

function CalButton({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function CalDisplay({ display }) {
  return (
    <div className='CalcDisplay'>
      {display}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (buttonLabel) => {
    if (buttonLabel === '=') {
      try {
        
        const result = eval(calculation);
        setDisplayValue(result.toString());
        setCalculation(result.toString());
      } catch (error) {
        
        setDisplayValue('Error');
        setCalculation('');
      }
    } else if (buttonLabel === 'C') {
      
      setDisplayValue('');
      setCalculation('');
    } else {
    
      setCalculation((prevCalculation) => prevCalculation + buttonLabel);
      setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonLabel);
    }
  };
  const handleSurnameButtonClick = () => {
    setDisplayValue('Kenneth Clark G. Auguis');
  };


 return (
  <div className='App'>
 <h1 className='Header'>Calculator of Ezikiel D. Manese IT3A</h1>
      <CalcDisplay display={displayValue} />
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
     <div className='LastNameButton'>
        <CalButton label="{"MANESE"} onClick={handleButtonClick} />
     </div>
    </div>
  );
}

export default App;
