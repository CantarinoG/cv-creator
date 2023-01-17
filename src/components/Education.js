import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
        <div className="education">
            <h2>Education</h2>
            <input type="text" placeholder="University"></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Degree"></input>
            <input type="text" placeholder="Subject"></input>
            <label htmlFor="edu-from">From</label>
            <input type="date" id="edu-from"></input>
            <label htmlFor="edu-to">To</label>
            <input type="date" id="edu-to"></input>
            <button>Delete</button>
            <button>Add</button>
        </div>
    )
  }
}

export default Education;