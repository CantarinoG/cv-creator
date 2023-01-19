import React, { Component } from "react";

import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Actions from "./Actions";

import "../styles/Info.css";

class Info extends Component {
  render() {
    return (
        <div className="info">
          <Personal
          setPersonalInfo={this.props.setPersonalInfo}
          />
          <Experience
          experienceList={this.props.experienceList}
          addNewExperience={this.props.addNewExperience}
          setExperience={this.props.setExperience}
          deleteExperience={this.props.deleteExperience}
          />
          <Education/>
          <Actions/>
        </div>
    )
  }
}

export default Info;