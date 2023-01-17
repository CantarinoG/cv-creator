import React, { Component } from "react";

import Header from "./components/Header";
import Info from "./components/Info";
import Preview from "./components/Preview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Info/>
        <Preview/>
      </div>
    )
  }
}

export default App;
