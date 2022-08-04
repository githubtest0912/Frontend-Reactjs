import React, { useState } from "react";

function HideAndShowElement() {
  const [show, setShow] = useState(true);

  function showContent() {
    setShow(true);
  }

  function hideContent() {
    setShow(false);
  }

  return (
    <div>
        {
            show?<h1>Show and Hide this text</h1>:null
        }
       
      <button onClick={showContent}>Show</button>
      <button onClick={hideContent}>Hide</button>
    </div>
  );
}

export default HideAndShowElement;
