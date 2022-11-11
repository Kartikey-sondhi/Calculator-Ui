
import './App.css';
import { useState } from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '+', '-', '*', '.'];

  const updateCalc = value => {
    if(ops.includes(value) && calc==='' || 
    ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    } //If operaor array includes a value and the calculation is zero or if the contains a value and the the operator also contains the value -1 slice hen return dont add the other operator into it 
    
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc+value))
    }
  }

  const calculate = () =>{
    setCalc(eval(calc).toString()) //simple function for the equal to button
  }

  const deleteLast =() =>{
    if(calc=== ''){
      return 
    }// Simlple funstion for the delete button which removes an element from the last 
    
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {

      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }// Function to create list of buttons rather than hardcoding the butto


  return (
    <div className="App">
      <header className="App-header">
        <div className='calculator'>
          <div className='display'>
            {result ? <span>({result})</span> : ''}
            {calc || "0"}
          </div>
          <div className='operators'>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={deleteLast}>Del</button>
          </div>
          <div className='digits'>
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
