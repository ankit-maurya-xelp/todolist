import React, { Component } from "react";
import Header from "./view/header";
import BodyComponent from "./view/bodyComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BodyComponent />
      </div>
    );
  }
}

export default App;
