import React from "react";
import './clear.css'


const Clear = (props) => {
    return(
      <div className="clear"
      onClick={()=>props.manejarClic()}>
        {props.children}
      </div>
    );
}

export default Clear;