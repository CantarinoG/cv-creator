import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
        <div className="experience">
          <h2>Experience</h2>
            <input type="text" placeholder="Position"></input>
            <input type="text" placeholder="Company"></input>
            <input type="text" placeholder="City"></input>
            <label htmlFor="exp-from">From</label>
            <input type="date" id="exp-from"></input>
            <label htmlFor="exp-to">To</label>
            <input type="date" id="exp-to"></input>
            <button>Delete</button>
            <button>Add</button>
        </div>
    )
  }
}

export default Experience;