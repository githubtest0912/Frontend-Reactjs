import { useState } from "react";

function GetInputValue() {
  const [name, setName] = useState("");
  

  function GetValue(e) {
    setName(e.target.value);
    console.log(e.target.value)
  }

  
  return (
    <div>
      <h1>Get input value</h1>
      <form>
        <div>
            <p>Entered name is:{name}</p>
          <label htmlFor="name">Name</label><br></br>
          <input 
          type="text" 
          name="name" 
          
          id="name" 
          onChange={GetValue}
          value={name} 
          />
         
          
        </div>
      </form>
    </div>
  );
}

export default GetInputValue;
