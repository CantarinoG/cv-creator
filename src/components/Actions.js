import React, { Component } from "react";

import "../styles/Actions.css";

class Actions extends Component {
  render() {
    return (
        <div className="actions">
            <button onClick={()=>{window.print()}}>Generate PDF</button>
            <button onClick={this.props.reset}>Reset</button>
        </div>
    )
  }
}

export default Actions;