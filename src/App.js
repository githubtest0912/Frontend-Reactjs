import React from "react";
// import ClassExample from "./components/ClassExample";
// import PropExample from "./components/PropExample";

// import ButtonInsideFunction from "./components/ButtonInsideFunction";
// import StateExample from "./components/StateExample";
// import UseStateInsideFunction from "./components/UseStateInsideFunction";
// import PropsInsideClassComponent from "./components/PropsInsideClassComponent";
import GetInputValue from "./components/GetInputValue";
import HideAndShowElement from "./components/HideAndShowElement";
import ToggleShowAndHide from "./components/ToggleShowAndHide";
import GetInputValueByClickButton from "./GetInputValueByClickButton";

function App() {
  return (
    <div>
      {/* <ClassExample />,
      <PropExample name="Selvi" />
      <ButtonInsideFunction />
      <StateExample />
      <UseStateInsideFunction />
      <PropsInsideClassComponent email = 'selvi@gmail.com'/> */}
      <GetInputValue />
      <GetInputValueByClickButton />
      <HideAndShowElement />
      <ToggleShowAndHide />

    </div>
  );
}

export default App;
