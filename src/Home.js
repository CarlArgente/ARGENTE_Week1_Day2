import React, { Component } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  TextareaAutosize,
} from "@mui/material";

class Home extends Component {
  state = {
    name: "",
    dateOfBirth: "yyyy/MM/dd",
    email: "",
    contact: "",
    aboutSelf: "",
    error: {
      nameError: "",
      dateOfBirthError: "",
      emailError: "",
      contactError: "",
      aboutSelfError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    if (e.target.id === "name") {
      this.validateName(e.target.value);
    } else if (e.target.id === "dateOfBirth") {
      this.validateBirthOfDate(e.target.value);
    } else if (e.target.id === "email") {
      this.validateEmail(e.target.value);
    } else if (e.target.id === "contact") {
      this.validateContact(e.target.value);
    } else if (e.target.id === "aboutSelf") {
      this.validateAboutSelf(e.target.value);
    }
  };
  validateBirthOfDate = (dateOfBirth) => {
    let formValid = this.state.formValid;
    let dateOfBirthError = this.state.error.dateOfBirthError;

    // Create a Date object for today's date
    let today = new Date();
    // Parse the entered date of birth
    let dobDate = new Date(dateOfBirth);

    formValid = false;
    if (dobDate > today) {
      formValid = false;
      dateOfBirthError =
        "Date of Birth cannot be greater than or equal today's date";
    } else {
      formValid = true;
      dateOfBirthError = "";
    }
    this.setState({
      dateOfBirth,
      formValid,
      error: { ...this.state.error, dateOfBirthError },
    });
    return formValid;
  };
  validateName = (name) => {
    let nameError = this.state.error.nameError;
    let formValid = this.state.formValid;
    let pattern = /^[A-Za-z\s]*$/;

    if (name.trim() === "") {
      formValid = false;
      nameError = "This is required.";
    } else if (!pattern.test(name)) {
      formValid = false;
      nameError = "It should alphabet only.";
    } else {
      formValid = true;
      nameError = "";
    }
    this.setState({
      name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };
  validateContact = (contact) => {
    let formValid = this.state.formValid;
    let contactError = this.state.error.contactError;
    let pattern = /^[0-9]+$/;

    if (contact.trim() === "") {
      contactError = "This is required.";
      formValid = false;
    } else if (contact.trim().length != 10) {
      contactError = "This is invalid.";
      formValid = false;
    } else if (!pattern.test(contact)) {
      contactError = "Please input number only.";
      formValid = false;
    } else {
      contactError = "";
      formValid = true;
    }
    this.setState({
      contact,
      formValid,
      error: { ...this.state.error, contactError },
    });
    return formValid;
  };
  validateAboutSelf = (aboutSelf) => {
    let formValid = this.state.formValid;
    let aboutSelfError = this.state.error.aboutSelfError;

    if (aboutSelf.trim() === "") {
      formValid = false;
      aboutSelfError = "This is required";
    } else {
      formValid = true;
      aboutSelfError = "";
    }
    this.setState({
      aboutSelf,
      formValid,
      error: { ...this.state.error, aboutSelfError },
    });

    return formValid;
  };
  validateEmail = (email) => {
    let emailError = this.state.error.emailError;
    let formValid = this.state.formValid;
    let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (email.trim() == "") {
      formValid = false;
      emailError = "This is required.";
    } else if (!pattern.test(email)) {
      formValid = false;
      emailError = "This is invalid";
    } else {
      formValid = true;
      emailError = "";
    }
    this.setState({
      email: email,
      formValid,
      error: { ...this.state.error, emailError },
    });
    return formValid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API
    if (
      this.validateName(this.state.name) &&
      this.validateEmail(this.state.email) &&
      this.validateBirthOfDate(this.state.dateOfBirth) &&
      this.validateContact(this.state.contact) &&
      this.validateAboutSelf(this.state.aboutSelf)
    ) {
      alert("Form is submitted");
      this.props.addData(this.state);

      this.setState({
        name: "",
        dateOfBirth: "yyyy/MM/dd",
        email: "",
        contact: "",
        aboutSelf: "",
        formValid: false,
      });
    } else {
      alert("Please double check the data.");
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-item-center ">
          <div className="col-sm-12 col-lg-6 col-md-6">
            <form
              className="shadow p-5 m-5 bg-body rounded"
              onSubmit={this.handleSubmit}
            >
              <div className="row">
                <div className="mb-1 col-sm-12 col-lg-6 col-6">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <p className="text-danger form-text">
                    {this.state.error.nameError}
                  </p>
                </div>

                <div className="mb-1 col-sm-12 col-lg-6 col-6">
                  <label for="dateOfBirth" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    onChange={this.handleChange}
                    value={this.state.dateOfBirth}
                    required
                  />
                  <p className="text-danger form-text">
                   
                    {this.state.error.dateOfBirthError}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="mb-1 col-sm-12 col-lg-6 col-6">
                  <label for="email" className="form-label">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={this.handleChange}
                    id="email"
                    value={this.state.email}
                    required
                  />
                  <p className="text-danger form-text">
                    {" "}
                    {this.state.error.emailError}
                  </p>
                </div>

                <div className="mb-1 col-sm-12 col-lg-6 col-6">
                  <label for="contact" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    required
                    onChange={this.handleChange}
                    value={this.state.contact}
                  />
                  <p className="text-danger form-text">
                    {this.state.error.contactError}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <label for="aboutSelf" className="form-label">
                  Tell me about your self
                </label>
                <textarea
                  className="form-control"
                  id="aboutSelf"
                  rows="2"
                  onChange={this.handleChange}
                  value={this.state.aboutSelf}
                ></textarea>
                <p className="text-danger form-text">
                  {" "}
                  {this.state.error.aboutSelfError}
                </p>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
