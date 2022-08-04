import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Message: "You click me" };
    this.Click = this.Click.bind(this)
  }
  Click(){
    this.setState({Message: 'You clicked me'})
  }
  render() {
    return (
      <div>
        <h1>Hi {this.state.Message}</h1>
        <button onClick = {this.Click}>Click me</button>
      </div>
    );
  }
}

export default StateExample;
