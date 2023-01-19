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
  }

  setPersonalInfo(e){
    const currentPersonal = this.state.personal;
    const field = e.target.placeholder;
    if(field === "Full name"){
      currentPersonal.fullName = e.target.value;
      this.setState({
        personal: currentPersonal
      });
    } else if (field === "Title"){
      currentPersonal.title = e.target.value;
      this.setState({
        personal: currentPersonal
      });
    } else if (field === "Address"){
      currentPersonal.address = e.target.value;
      this.setState({
        personal: currentPersonal
      });
    } else if (field === "Phone number"){
      currentPersonal.phoneNumber = e.target.value;
      this.setState({
        personal: currentPersonal
      });
    } else if (field === "Email"){
      currentPersonal.email = e.target.value;
      this.setState({
        personal: currentPersonal
      });
    } else if (field === "Description"){
      currentPersonal.description = e.target.value;
      this.setState({
        personal: currentPersonal
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Info
        setPersonalInfo={this.setPersonalInfo}
        />
        <Preview
        personal={this.state.personal}
        />
      </div>
    )
  }
}

export default App;