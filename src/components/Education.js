import React from "react";

import { AiFillEdit } from 'react-icons/ai';

const Education = (props) => {

  return (
    <div className="education">
        <h2>Education</h2>

        {props.educationList.map((education, index) => {
        return <div className="individual-education" key={index} id={index}>

        <div className="input-row"><AiFillEdit/><input className="dark-placeholder university" type="text" placeholder={education.university} value={education.university} onChange={props.setEducation}></input></div>
        <div className="input-row"><AiFillEdit/><input className="dark-placeholder edu-city" type="text" placeholder={education.city} value={education.city} onChange={props.setEducation}></input></div>
        <div className="input-row"><AiFillEdit/><input className="dark-placeholder degree" type="text" placeholder={education.degree} value={education.degree} onChange={props.setEducation}></input></div>
        <div className="input-row"><AiFillEdit/><input className="dark-placeholder subject" type="text" placeholder={education.subject} value={education.subject} onChange={props.setEducation} ></input></div>
        <div className="input-row"><label htmlFor="edu-from">From:</label><input className="dark-placeholder edu-from" type="text" id="edu-from" placeholder={education.from} value={education.from} onChange={props.setEducation} ></input></div>
        <div className="input-row"><label htmlFor="edu-to">To:</label><input className="dark-placeholder edu-to" type="text" id="edu-to" placeholder={education.to} value={education.to} onChange={props.setEducation}></input></div>
        <button className="del-btn" onClick={props.deleteEducation}>Delete</button>
        </div>;
        })}

        <button onClick={props.addNewEducation}>Add</button>
    </div>
  )

}

export default Education;