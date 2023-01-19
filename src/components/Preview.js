import React, { Component } from "react";

import "../styles/Preview.css";

class Preview extends Component {
  render() {
    return (
        <div className="preview">
            <h2>Preview</h2>
            <div className="cv-container">
                <main className="cv-main">
                  <h2 id="cv-name">John Doe</h2>
                  <h3>Web Developer</h3>
                  <div className="cv-description">
                    <h3>Description</h3>
                    <h5>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum </h5>
                  </div>
                  <div className="cv-experience">
                    <h3>Experience</h3>
                    <h4>2015 - Present | Senior Web Developer</h4>
                    <h5>Facebook Inc., Menlo Park</h5>
                  </div>
                  <div className="cv-education">
                    <h3>Education</h3>
                    <h4>2008 - 2010 | University of Technology, Oklahome</h4>
                    <h5>Degree: Master<br></br>Subject: Science</h5>
                  </div>
                </main>
                <aside className="cv-aside">
                  <img/>
                  <h3>Personal Details</h3>
                  <h4>Address</h4>
                  <h5>Example Street 10</h5>
                  <h4>Phone Number</h4>
                  <h5>123456789</h5>
                  <h4>Email</h4>
                  <h5>john.doe@gmail.com</h5>
                </aside>
            </div>
        </div>
    )
  }
}

export default Preview;