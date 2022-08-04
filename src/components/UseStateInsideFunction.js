import { useState } from "react";

function UseStateInsideFunction() {
 let [data, setData] = useState(0)
 const [name, setName] = useState('Selvi')

  function UpdateData() {
    setData(data + 1);
  }

  function UpdateName() {
    setName('Selva')
  }
  return (
    <div>
      <h1>{data}</h1>
      <h1>{name}</h1>
      <button onClick={UpdateName}> Update Name </button><br/><br />
      <button onClick={UpdateData}> Update Data </button>
    </div>
  );
}

export default UseStateInsideFunction;
