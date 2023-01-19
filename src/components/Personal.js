import React, { Component } from "react";

import { AiFillEdit } from 'react-icons/ai';

class Personal extends Component {
  render() {
    return (
        <div className="personal">
          <h2>Personal Information</h2>
          <div className="input-row"><AiFillEdit/><input value={this.props.personal.fullName} type="text" placeholder="Full name" onChange={this.props.setPersonalInfo} ></input></div>
          <div className="input-row"><AiFillEdit/><input value={this.props.personal.title} type="text" placeholder="Title" onChange={this.props.setPersonalInfo} ></input></div>
          <div className="input-row"><AiFillEdit/><input value={this.props.personal.address} type="text" placeholder="Address" onChange={this.props.setPersonalInfo}></input></div>
          <div className="input-row"><AiFillEdit/><input value={this.props.personal.phoneNumber} type="tel" placeholder="Phone number" onChange={this.props.setPersonalInfo} ></input></div>
          <div className="input-row"><AiFillEdit/><input value={this.props.personal.email} type="email" placeholder="Email" onChange={this.props.setPersonalInfo}></input></div>
          <div className="input-row"><textarea value={this.props.personal.description} placeholder="Description" onChange={this.props.setPersonalInfo}></textarea></div>
          <div className="input-row"><label htmlFor="photo"><span>Photo (Optional): </span><span id="photo-btn">Add photo</span></label><input type="file" id="photo" accept="image/*" onChange={this.props.setPersonalInfo}></input></div>
        </div>
    )
  }
}

export default Personal;