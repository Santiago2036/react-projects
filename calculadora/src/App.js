import React from "react";
import logo from './imagenes/freecode.png';
import './App.css';
import Boton from './componentes/boton.js'
import Pantalla from './componentes/pantalla';
import Clear from './componentes/clear';
import { useState} from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const updateValue = value =>{
    setInput(input + value);
  }

  const resetValue = () =>{
    setInput('');
  }

  const operacion  = () =>{

    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img 
          className='logo'
          src={logo}
          alt='logo' 
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>  
          <Boton manejarClic={updateValue}>1</Boton>
          <Boton manejarClic={updateValue}>2</Boton>
          <Boton manejarClic={updateValue}>3</Boton>
          <Boton manejarClic={updateValue}>+</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={updateValue}>4</Boton>
          <Boton manejarClic={updateValue}>5</Boton>
          <Boton manejarClic={updateValue}>6</Boton>
          <Boton manejarClic={updateValue}>-</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={updateValue}>7</Boton>
          <Boton manejarClic={updateValue}>8</Boton>
          <Boton manejarClic={updateValue}>9</Boton>
          <Boton manejarClic={updateValue}>*</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={operacion}>=</Boton>
          <Boton manejarClic={updateValue}>0</Boton>
          <Boton manejarClic={updateValue}>.</Boton>
          <Boton manejarClic={updateValue}>/</Boton>
        </div>

        <Clear manejarClic={resetValue}>CLEAR</Clear>

      </div>
      
    </div>
  );
}

export default App;
