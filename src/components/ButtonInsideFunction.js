import React from "react";

function ButtonInsideFunction() {
  function Click() {
    return (
    
        alert('you clicked me')
   
    )
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Press this button you will receive alert box
      </h1>
      <button onClick={Click} style={{ backgroundColor: "pink" }}>
        Click Me
      </button>
    </div>
  );
}

export default ButtonInsideFunction;
