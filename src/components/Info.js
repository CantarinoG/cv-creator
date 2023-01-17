import React, { Component } from "react";

import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Actions from "./Actions";

class Info extends Component {
  render() {
    return (
        <div className="info">
          <Personal/>
          <Experience/>
          <Education/>
          <Actions/>
        </div>
    )
  }
}

export default Info;