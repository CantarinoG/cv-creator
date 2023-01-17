import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
        <div className="personal">
          <h2>Personal Information</h2>
          <input type="text" placeholder="Full name"></input>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Adress"></input>
          <input type="tel" placeholder="Phone number"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Description"></input>
          <label htmlFor="photo">Photo (Optional)</label>
          <input type="file" id="photo"></input>
        </div>
    )
  }
}

export default Personal;