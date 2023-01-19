import React, { Component } from "react";

import Header from "./components/Header";
import Info from "./components/Info";
import Preview from "./components/Preview";

import "./styles/App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      personal: {
        fullName: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
        img: ""
      },
      experienceList: [],
      //{ position, company, city, from, to }
      educationList: []
      //{ university, city, degree, subject, from, to }
    }

    this.setPersonalInfo = this.setPersonalInfo.bind(this);

    this.addNewExperience = this.addNewExperience.bind(this);
    this.setExperience = this.setExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);

    this.addNewEducation = this.addNewEducation.bind(this);
    this.setEducation = this.setEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);

    this.reset = this.reset.bind(this);
  }

  setPersonalInfo(e){
    const currentPersonal = this.state.personal;
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
    this.setState({
      personal: currentPersonal
    });
  }

  setExperience(e){
    const index = e.target.parentNode.parentNode.id;
    const currentExperienceList = this.state.experienceList;
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
      this.setState({experienceList: currentExperienceList});
  }

  addNewExperience() {
    const currentExperienceList = this.state.experienceList;
    const emptyExperience = {position: "Position", company: "Company", city: "City", from: "From", to: "To"};
    currentExperienceList.push(emptyExperience);
    this.setState({
      experienceList: currentExperienceList
    });
  }

  deleteExperience(e) {
    const index = e.target.parentNode.id;
    const currentExperienceList = this.state.experienceList;
    currentExperienceList.splice(index, 1);
    this.setState({
      experienceList: currentExperienceList
    });
  }

  setEducation(e) {
    const index = e.target.parentNode.parentNode.id;
    const currentEducationList = this.state.educationList;
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
      this.setState({educationList: currentEducationList});
  }

  addNewEducation() {
    const currentEducationList = this.state.educationList;
    const emptyEducation = { university: "University", city: "City", degree: "Degree", subject: "Subject", from: "From", to: "To" };
    currentEducationList.push(emptyEducation);
    this.setState({
      educationList: currentEducationList
    });
  }

  deleteEducation(e) {
    const index = e.target.parentNode.id;
    const currentEducationList = this.state.educationList;
    currentEducationList.splice(index, 1);
    this.setState({
      educationList: currentEducationList
    });
  }

  reset() {
    this.setState({
      personal: {
        fullName: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
        photo: ""
      },
      experienceList: [],
      educationList: []
    });
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Info
        personal={this.state.personal}
        setPersonalInfo={this.setPersonalInfo}
        experienceList={this.state.experienceList}
        addNewExperience={this.addNewExperience}
        setExperience={this.setExperience}
        deleteExperience={this.deleteExperience}
        educationList={this.state.educationList}
        addNewEducation={this.addNewEducation}
        setEducation={this.setEducation}
        deleteEducation={this.deleteEducation}
        reset={this.reset}
        />
        <Preview
        personal={this.state.personal}
        experienceList={this.state.experienceList}
        educationList={this.state.educationList}
        />
      </div>
    )
  }
}

export default App;