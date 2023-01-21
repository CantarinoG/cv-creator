import React from "react";

import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Actions from "./Actions";

import "../styles/Info.css";

const Info = (props) => {

  return (
    <div className="info">
      <Personal
      setPersonalInfo={props.setPersonalInfo}
      personal={props.personal}
      />
      <Experience
      experienceList={props.experienceList}
      addNewExperience={props.addNewExperience}
      setExperience={props.setExperience}
      deleteExperience={props.deleteExperience}
      />
      <Education
      educationList={props.educationList}
      addNewEducation={props.addNewEducation}
      setEducation={props.setEducation}
      deleteEducation={props.deleteEducation}
      />
      <Actions
      reset={props.reset}
      />
    </div>
)

}

export default Info;