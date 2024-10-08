import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [originalValue, setOriginalValue] = useState(0);
  const [measurement, setMeasurement] = useState('feet');
  const [converted, setConverted] = useState('meters');
  const [inital, setInital] = useState("")
  
  useEffect(()=>{
    converter(inital)
  }, [measurement, converted, inital])

  
  const converter = (str: string) => {
    const inputValue = parseFloat(str);
    
    if (isNaN(inputValue)) {
      // Handle invalid input (non-numeric)
      setValue(0);
      setOriginalValue(0)
      return;
    }

    // Convert the input value to the base unit (feet)
    let baseValue;
    switch (measurement) {
      case 'feet':
        baseValue = inputValue;
        break;
      case 'meters':
        baseValue = inputValue / 0.3048;
        break;
      case 'yards':
        baseValue = inputValue * 3;
        break;
      case 'centimeters':
        baseValue = inputValue / 30.48;
        break;
      case 'miles':
        baseValue = inputValue * 5280;
        break;
      case 'kilometers':
        baseValue = inputValue * 3280.84;
        break;
      case 'inches':
        baseValue = inputValue / 12;
        break;
      default:
        baseValue = inputValue;
    }
      setOriginalValue(inputValue);
    // Convert the base value to the desired output unit
    let result;
    switch (converted) {
      case 'feet':
        result = baseValue;
        break;
      case 'meters':
        result = baseValue * 0.3048;
        break;
      case 'yards':
        result = baseValue / 3;
        break;
      case 'centimeters':
        result = baseValue * 30.48;
        break;
      case 'miles':
        result = baseValue / 5280;
        break;
      case 'kilometers':
        result = baseValue / 3280.84;
        break;
      case 'inches':
        result = baseValue * 12;
        break;
      default:
        result = baseValue;
    }
    setValue(Number(result.toFixed(3)));
  };

  return (
    <>
      <h1 id="title">Measurement Converter</h1>
      <div id="wrapper">
        <h2>Convert {measurement} to {converted}</h2>
        <div id="container">
          <input id="value" type="number" required onChange={(e) =>{
              setInital(e.target.value)
              converter(inital)
          }} />
          <div id="select" >
            <select id="measurement" value={measurement} onChange={(e) => {
              setMeasurement(e.target.value)
              
            }}>
              <option value="centimeters">Centimeters</option>
              <option value="inches">Inches</option>
              <option value="feet">Feet</option>
              <option value="meters">Meters</option>
              <option value="yards">Yards</option>
              <option value="miles">Miles</option>
              <option value="kilometers">Kilometers</option>
              
            </select>
          </div>
          <h2 className="measurementInput"> to </h2>
          <div id="select">
            <select id="converted" value={converted} onChange={(e) => setConverted(e.target.value)}>
            <option value="centimeters">Centimeters</option>
              <option value="inches">Inches</option>
              <option value="feet">Feet</option>
              <option value="meters">Meters</option>
              <option value="yards">Yards</option>
              <option value="miles">Miles</option>
              <option value="kilometers">Kilometers</option>
            </select>
          </div>
        </div>
        <h1>{originalValue} {measurement} is {value} {converted}</h1> 
       
      </div>
     
      <footer>Created by Bryson Sutton</footer>
    </>
  );
}

export default App;
