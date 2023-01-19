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
        description: ""
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

  render() {
    return (
      <div className="app">
        <Header/>
        <Info
        setPersonalInfo={this.setPersonalInfo}
        experienceList={this.state.experienceList}
        addNewExperience={this.addNewExperience}
        setExperience={this.setExperience}
        deleteExperience={this.deleteExperience}
        />
        <Preview
        personal={this.state.personal}
        experienceList={this.state.experienceList}
        />
      </div>
    )
  }
}

export default App;