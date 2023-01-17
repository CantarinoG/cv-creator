import React, { Component } from "react";

import "../styles/Preview.css";

class Preview extends Component {
  render() {
    return (
        <div className="preview">
            <h2>Preview</h2>
            <div className="cv-container">
                <main className="cv-main"></main>
                <aside className="cv-aside"></aside>
            </div>
        </div>
    )
  }
}

export default Preview;