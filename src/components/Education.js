import React, { Component } from "react";

import { AiFillEdit } from 'react-icons/ai';

class Education extends Component {
  render() {
    return (
        <div className="education">
            <h2>Education</h2>
            <div className="input-row"><AiFillEdit/><input type="text" placeholder="University"></input></div>
            <div className="input-row"><AiFillEdit/><input type="text" placeholder="City"></input></div>
            <div className="input-row"><AiFillEdit/><input type="text" placeholder="Degree"></input></div>
            <div className="input-row"><AiFillEdit/><input type="text" placeholder="Subject"></input></div>
            <div className="input-row"><label htmlFor="edu-from">From</label><input type="date" id="edu-from"></input></div>
            <div className="input-row"><label htmlFor="edu-to">To</label><input type="date" id="edu-to"></input></div>
            <button className="del-btn">Delete</button>
            <button>Add</button>
        </div>
    )
  }
}

export default Education;