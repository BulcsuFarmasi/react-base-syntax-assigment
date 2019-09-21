import React, { Component } from "react";
import "./App.css";

import { UserInput } from "./UserInput/UserInput";
import { UserOutput } from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Wulip"
  };

  changeUserNameHandler = event => {
    const userName = event.target.value;
    this.setState({
      userName
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changeUserName={this.changeUserNameHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
