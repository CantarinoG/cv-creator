import React, { Component } from "react";

import { AiFillEdit } from 'react-icons/ai';

class Personal extends Component {
  render() {
    return (
        <div className="personal">
          <h2>Personal Information</h2>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Full name"></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Title"></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Adress"></input></div>
          <div className="input-row"><AiFillEdit/><input type="tel" placeholder="Phone number"></input></div>
          <div className="input-row"><AiFillEdit/><input type="email" placeholder="Email"></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Description"></input></div>
          <div className="input-row"><label htmlFor="photo"><span>Photo (Optional): </span><span id="photo-btn">Add photo</span></label><input type="file" id="photo"></input></div>
        </div>
    )
  }
}

export default Personal;