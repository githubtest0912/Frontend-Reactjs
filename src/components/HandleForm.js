import React, { useState } from "react";

function HandleForm() {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [terms, setTerms] = useState(false);

  function nameField(e) {
    setName(e.target.value);
    //console.log(e.target.value);
  }

  function selectItem(e) {
    setSelect(e.target.value);

  }

  function checkTerms(e) {
    setTerms(e.target.checked);
  }

  function handleData(e) {
    e.preventDefault();
    console.log("All data", name,select,terms)
  }

  return (
    <div>
      <form onSubmit={handleData}>
        <div>
          <h2>User Form</h2>
        </div>
        <br />
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={nameField}
            value={name}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="favourite">Choose a favourite item:</label>
          <select name="favourite" id="favourite" onChange={selectItem}>
            <option value="">--Please choose an option--</option>
            <option>Ice cream</option>
            <option>Gobi manchurian</option>
            <option>Dhal rice</option>
          </select>
        </div>
        <br />
        <div>
          <input type="checkbox" onChange={checkTerms}></input>
          <span>Terms and condition</span>
        </div>
        <br />
        <br />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HandleForm;
