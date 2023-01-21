import React from "react";

import { AiFillEdit } from 'react-icons/ai';

const Personal = (props) => {

  return (
    <div className="personal">
      <h2>Personal Information</h2>
      <div className="input-row"><AiFillEdit/><input value={props.personal.fullName} type="text" placeholder="Full name" onChange={props.setPersonalInfo} ></input></div>
      <div className="input-row"><AiFillEdit/><input value={props.personal.title} type="text" placeholder="Title" onChange={props.setPersonalInfo} ></input></div>
      <div className="input-row"><AiFillEdit/><input value={props.personal.address} type="text" placeholder="Address" onChange={props.setPersonalInfo}></input></div>
      <div className="input-row"><AiFillEdit/><input value={props.personal.phoneNumber} type="tel" placeholder="Phone number" onChange={props.setPersonalInfo} ></input></div>
      <div className="input-row"><AiFillEdit/><input value={props.personal.email} type="email" placeholder="Email" onChange={props.setPersonalInfo}></input></div>
      <div className="input-row"><textarea value={props.personal.description} placeholder="Description" onChange={props.setPersonalInfo}></textarea></div>
      <div className="input-row"><label htmlFor="photo"><span>Photo (Optional): </span><span id="photo-btn">Add photo</span></label><input type="file" id="photo" accept="image/*" onChange={props.setPersonalInfo}></input></div>
    </div>
  )

}

export default Personal;