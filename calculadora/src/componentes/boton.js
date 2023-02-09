import React from 'react';
import './boton.css'


function Boton(props){

  const isOperador = valor => {

    return(
      isNaN(valor) && (valor != '=') && (valor != '.')
    );
  }


  return(
    <div className={`boton-contenedor ${isOperador(props.children) ? 'operador' :''}`.trimEnd()}
    onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;