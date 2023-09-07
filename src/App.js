import React, { Component } from "react";
import Display from "./Display";
import AppNav from "./AppNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import HomeContent from "./HomeContent";
import AboutContent from "./AboutContent";

class App extends Component {
  state = {
    userData: [],
    groceryData: []
  };
  addData = (user) => { 
    let userData = [...this.state.userData, user];
    this.setState({
      userData,
    });
  };
  addGrocery = (item) => {
    let groceryData = [...this.state.groceryData, item]
    this.setState({
      groceryData
    });
  }
  render() {
    return (
      <>
        <Router>
          <AppNav />

          <Routes>
            <Route path="/" exact element={<HomeContent addData={this.addData} userData={this.state.userData}/> } />
            <Route path="/about" element={<AboutContent addGrocery={this.addGrocery} groceryData ={this.state.groceryData} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
       
      </>
    );
  }
}

export default App;
