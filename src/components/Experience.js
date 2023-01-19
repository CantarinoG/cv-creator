import React, { Component } from "react";

import { AiFillEdit } from 'react-icons/ai';

class Experience extends Component {
  render() {
    return (
        <div className="experience">
          <h2>Experience</h2>

          {this.props.experienceList.map((experience, index) => {
       return <div className="individual-experience" key={index} id={index}>
          <div className="input-row"><AiFillEdit/><input className="dark-placeholder position" type="text" placeholder={experience.position} value={experience.position} onChange={this.props.setExperience}></input></div>
          <div className="input-row"><AiFillEdit/><input className="dark-placeholder company" type="text" placeholder={experience.company} value={experience.company} onChange={this.props.setExperience}></input></div>
          <div className="input-row"><AiFillEdit/><input className="dark-placeholder city" type="text" placeholder={experience.city} value={experience.city} onChange={this.props.setExperience}></input></div>
          <div className="input-row"><label htmlFor="exp-from">From: </label><input className="dark-placeholder from" type="text" id="exp-from" placeholder={experience.from} value={experience.from} onChange={this.props.setExperience}></input></div>
          <div className="input-row"><label htmlFor="exp-to">To: </label><input className="dark-placeholder to" type="text" id="exp-to" placeholder={experience.to} value={experience.to} onChange={this.props.setExperience}></input></div>
            <button className="del-btn" onClick={this.props.deleteExperience}>Delete</button>
       </div>;
      })}

            <button onClick={this.props.addNewExperience}>Add</button>
        </div>
    )
  }
}

export default Experience;