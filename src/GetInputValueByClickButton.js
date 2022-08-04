import { useState } from "react";

function GetInputValueByClickButton() {
  const [data, setData] = useState("");
  const[print, setPrint] = useState(false);

  const getData = event => {
    setData(event.target.value);
    setPrint(false);
    // console.log('Message is:', event.target.value)

  }
  const PrintValue = () =>{
    setPrint(true)
  }

  return (
    <div>
        {
            print?<h1>{data}</h1>:null
        }
      <form action='' method='post'>
        <input
          type="text"
          id="data"
          name="data"
          onChange={getData}
          value={data}
          autoComplete="off"
        />
      </form>

      <button onClick={PrintValue}>Click Me</button>
      {/* <h2>My name is: {message}</h2> */}
    </div>
  );
}

export default GetInputValueByClickButton;
