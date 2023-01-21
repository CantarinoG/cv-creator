import React, { useState } from "react";

import Header from "./components/Header";
import Info from "./components/Info";
import Preview from "./components/Preview";

import "./styles/App.css";

const App = () => {

    //Setting states
    const [personal, setPersonal] = useState({
      fullName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      img: ""
    });
    const [experienceList, setExperienceList] = useState([]);
    const [educationList, setEducationList] = useState([]);

    //Creating the functions
    const setPersonalInfo = (e) => {
      const currentPersonal = {
        fullName: personal.fullName,
        title: personal.title,
        address: personal.address,
        phoneNumber: personal.phoneNumber,
        email: personal.email,
        description: personal.description,
        img: personal.img
      };
      const field = e.target.placeholder;
      if(field === "Full name"){
        currentPersonal.fullName = e.target.value;
      } else if (field === "Title"){
        currentPersonal.title = e.target.value;
      } else if (field === "Address"){
        currentPersonal.address = e.target.value;
      } else if (field === "Phone number"){
        currentPersonal.phoneNumber = e.target.value;
      } else if (field === "Email"){
        currentPersonal.email = e.target.value;
      } else if (field === "Description"){
        currentPersonal.description = e.target.value;
      } else if (e.target.id === "photo"){
        currentPersonal.photo = URL.createObjectURL(e.target.files[0])
      }
      setPersonal(currentPersonal);
    }
  
    const setExperience = (e) =>{
      const index = e.target.parentNode.parentNode.id;
      const currentExperienceList = [...experienceList];
      const currentExperience = currentExperienceList[index];
      if(e.target.classList.contains('position')){
        currentExperience["position"] = e.target.value;
      } else if(e.target.classList.contains('company')){
        currentExperience["company"] = e.target.value;
      } else if(e.target.classList.contains('city')){
        currentExperience["city"] = e.target.value;
      } else if(e.target.classList.contains('from')){
        currentExperience["from"] = e.target.value;
      } else if(e.target.classList.contains('to')){
        currentExperience["to"] = e.target.value;
      }
      currentExperienceList[index] = currentExperience;
        setExperienceList(currentExperienceList);
    }
  
    const addNewExperience = () => {
      const currentExperienceList = [...experienceList];
      const emptyExperience = {position: "Position", company: "Company", city: "City", from: "From", to: "To"};
      currentExperienceList.push(emptyExperience);
      setExperienceList(currentExperienceList);
    }
  
    const deleteExperience = (e) => {
      const index = e.target.parentNode.id;
      const currentExperienceList = [...experienceList];
      currentExperienceList.splice(index, 1);
      setExperienceList(currentExperienceList);
    }
  
    const setEducation = (e) => {
      const index = e.target.parentNode.parentNode.id;
      const currentEducationList = [...educationList];
      const currentEducation = currentEducationList[index];
      if(e.target.classList.contains('university')){
        currentEducation["university"] = e.target.value;
      } else if(e.target.classList.contains('edu-city')){
        currentEducation["city"] = e.target.value;
      } else if(e.target.classList.contains('degree')){
        currentEducation["degree"] = e.target.value;
      } else if(e.target.classList.contains('subject')){
        currentEducation["subject"] = e.target.value;
      } else if(e.target.classList.contains('edu-from')){
        currentEducation["from"] = e.target.value;
      } else if(e.target.classList.contains('edu-to')){
        currentEducation["to"] = e.target.value;
      }
      currentEducationList[index] = currentEducation;
        setEducationList(currentEducationList);
    }
  
    const addNewEducation = () => {
      const currentEducationList = [...educationList];
      const emptyEducation = { university: "University", city: "City", degree: "Degree", subject: "Subject", from: "From", to: "To" };
      currentEducationList.push(emptyEducation);
      setEducationList(currentEducationList);
    }
  
    const deleteEducation = (e) => {
      const index = e.target.parentNode.id;
      const currentEducationList = [...educationList];
      currentEducationList.splice(index, 1);
      setEducationList(currentEducationList);
    }
  
    const reset = () => {
      setPersonal({
        fullName: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
        photo: ""
      });
      setExperienceList([]);
      setEducationList([]);
    }

    //Render
    return (
      <div className="app">
        <Header/>
        <Info
        personal={personal}
        setPersonalInfo={setPersonalInfo}
        experienceList={experienceList}
        addNewExperience={addNewExperience}
        setExperience={setExperience}
        deleteExperience={deleteExperience}
        educationList={educationList}
        addNewEducation={addNewEducation}
        setEducation={setEducation}
        deleteEducation={deleteEducation}
        reset={reset}
        />
        <Preview
        personal={personal}
        experienceList={experienceList}
        educationList={educationList}
        />
      </div>
    )

}

export default App;