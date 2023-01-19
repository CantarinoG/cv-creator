import React, { Component } from "react";

import { AiFillEdit } from 'react-icons/ai';

class Personal extends Component {
  render() {
    return (
        <div className="personal">
          <h2>Personal Information</h2>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Full name" onChange={this.props.setPersonalInfo} ></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Title" onChange={this.props.setPersonalInfo} ></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Address" onChange={this.props.setPersonalInfo}></input></div>
          <div className="input-row"><AiFillEdit/><input type="tel" placeholder="Phone number" onChange={this.props.setPersonalInfo} ></input></div>
          <div className="input-row"><AiFillEdit/><input type="email" placeholder="Email" onChange={this.props.setPersonalInfo}></input></div>
          <div className="input-row"><textarea placeholder="Description" onChange={this.props.setPersonalInfo}></textarea></div>
          <div className="input-row"><label htmlFor="photo"><span>Photo (Optional): </span><span id="photo-btn">Add photo</span></label><input type="file" id="photo"></input></div>
        </div>
    )
  }
}

export default Personal;