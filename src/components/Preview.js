import React, { Component } from "react";

import "../styles/Preview.css";

class Preview extends Component {
  render() {
    return (
        <div className="preview">
            <h2>Preview</h2>
            <div className="cv-container">
                <main className="cv-main">
                  <h2 id="cv-name">{this.props.personal.fullName}</h2>
                  <h3>{this.props.personal.title}</h3>
                  <div className="cv-description">
                    <h3>Description</h3>
                    <h5>{this.props.personal.description}</h5>
                  </div>
                  <div className="cv-experience">
                    <h3>Experience</h3>



            
                    {this.props.experienceList.map((experience, index) => {
       return <div className="individual-experience" key={index}>
              <h4>{experience.from} - {experience.to} | {experience.position}</h4>
              <h5>{experience.company}, {experience.city}</h5>
       </div>
      })}


                  </div>
                  <div className="cv-education">
                    <h3>Education</h3>


                    {this.props.educationList.map((education, index) => {
       return <div className="individual-education" key={index}>
              <h4>{education.from} - {education.to} | {education.university}, {education.city}</h4>
              <h5>Degree: {education.degree}<br></br>Subject: {education.subject}</h5>
       </div>
      })}

                  </div>
                </main>
                <aside className="cv-aside">
                  <img/>
                  <h3>Personal Details</h3>
                  <h4>Address</h4>
                  <h5>{this.props.personal.address}</h5>
                  <h4>Phone Number</h4>
                  <h5>{this.props.personal.phoneNumber}</h5>
                  <h4>Email</h4>
                  <h5>{this.props.personal.email}</h5>
                </aside>
            </div>
        </div>
    )
  }
}

export default Preview;